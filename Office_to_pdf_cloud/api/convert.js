import { IncomingForm } from 'formidable';
import libre from 'libreoffice-convert';
import fs from 'fs';

// Disabilitiamo il body parser predefinito di Vercel perché
// dobbiamo gestire un caricamento di file (multipart/form-data)
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    // Accettiamo solo richieste POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Metodo non consentito. Usa POST.' });
    }

    // Utilizziamo 'formidable' per leggere il file inviato dal frontend
    const form = new IncomingForm({
        keepExtensions: true,
        maxFileSize: 20 * 1024 * 1024, // Limite di 20MB per file
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Errore durante il parsing del form:', err);
            return res.status(500).json({ error: 'Errore nel caricamento del file' });
        }

        // Recuperiamo il file (nel frontend lo chiameremo 'document')
        const fileArray = files.document;
        if (!fileArray || fileArray.length === 0) {
            return res.status(400).json({ error: 'Nessun file ricevuto' });
        }

        const uploadedFile = fileArray[0];
        const filePath = uploadedFile.filepath;

        try {
            // Leggiamo il file temporaneo salvato sul server
            const fileBuffer = fs.readFileSync(filePath);

            // Eseguiamo la conversione usando libreoffice-convert
            libre.convert(fileBuffer, '.pdf', undefined, (convertErr, done) => {
                if (convertErr) {
                    console.error('Errore di conversione LibreOffice:', convertErr);
                    return res.status(500).json({ error: 'Errore durante la conversione in PDF.' });
                }

                // Se la conversione va a buon fine, restituiamo il file PDF al browser!
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'inline; filename="converted.pdf"');
                res.send(done);
            });
        } catch (readErr) {
            console.error('Errore di lettura del file:', readErr);
            res.status(500).json({ error: 'Impossibile elaborare il file sul server.' });
        }
    });
}
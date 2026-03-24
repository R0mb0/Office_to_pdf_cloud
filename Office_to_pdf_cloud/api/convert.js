import { IncomingForm } from 'formidable';
import libre from 'libreoffice-convert';
import fs from 'fs';

// Disable Vercel's default body parser because
// we need to handle file uploads (multipart/form-data)
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    // Accept only POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // Use 'formidable' to parse the file sent from the frontend
    const form = new IncomingForm({
        keepExtensions: true,
        maxFileSize: 20 * 1024 * 1024, // 20MB file size limit
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Error parsing the form:', err);
            return res.status(500).json({ error: 'Error uploading the file' });
        }

        // Retrieve the file (sent as 'document' from the frontend)
        const fileArray = files.document;
        if (!fileArray || fileArray.length === 0) {
            return res.status(400).json({ error: 'No file received' });
        }

        const uploadedFile = fileArray[0];
        const filePath = uploadedFile.filepath;

        try {
            // Read the temporary file saved on the server
            const fileBuffer = fs.readFileSync(filePath);

            // Perform the conversion using libreoffice-convert
            libre.convert(fileBuffer, '.pdf', undefined, (convertErr, done) => {
                if (convertErr) {
                    console.error('LibreOffice conversion error:', convertErr);
                    return res.status(500).json({ error: 'Error during PDF conversion.' });
                }

                // If conversion is successful, send the PDF file back to the browser!
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'inline; filename="converted.pdf"');
                res.send(done);
            });
        } catch (readErr) {
            console.error('File read error:', readErr);
            res.status(500).json({ error: 'Unable to process the file on the server.' });
        }
    });
}
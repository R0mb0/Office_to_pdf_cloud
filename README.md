<div align="center">

# 📄 Office to PDF Cloud-Free ☁️

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4bb84dcb342b405a84653242a1430c8c)](https://app.codacy.com/gh/R0mb0/Office_to_pdf_cloud/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![pages-build-deployment](https://github.com/R0mb0/Office_to_pdf_cloud/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/R0mb0/Office_to_pdf_cloud/actions/workflows/pages/pages-build-deployment)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://r0mb0.github.io/Office_to_pdf_cloud/)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://r0mb0.github.io/Office_to_pdf_cloud/)
[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit)
[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](http://paypal.me/R0mb0)

</div>

<p align="center">
  A lightweight, 100% client-side converter that transforms Word (.docx), Excel (.xlsx, .xls, .csv), and PowerPoint (.pptx) files into professional, paginated PDFs. No server, no APIs, no data leaves your browser. Built with Mammoth.js, SheetJS, and jsPDF.
</p>

<div align="center">

<div align="center">
  <a href="http://paypal.me/R0mb0">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Light.svg">
      <img alt="Saved you time? Support the dev" src="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Default.svg">
    </picture>
  </a>
</div>

  
## [👉 Click here to test the page! 👈](https://r0mb0.github.io/Office_to_pdf_cloud/)

[![00.png](https://github.com/R0mb0/Office_to_pdf_cloud/blob/main/Readme_imgs/00.png)](https://r0mb0.github.io/Office_to_pdf_cloud/)
[![01.png](https://github.com/R0mb0/Office_to_pdf_cloud/blob/main/Readme_imgs/01.png)](https://r0mb0.github.io/Office_to_pdf_cloud/)
[![02.png](https://github.com/R0mb0/Office_to_pdf_cloud/blob/main/Readme_imgs/02.png)](https://r0mb0.github.io/Office_to_pdf_cloud/)

</div>

<hr>

<h2>🚀 Features</h2>
<ul>
    <li><strong>Full Office Support</strong>: Converts Word (DOCX), Excel (XLSX, XLS, CSV) and PowerPoint (.pptx) formats directly in the browser.</li>
    <li><strong>Zero-Server Privacy</strong>: All processing happens locally. Your sensitive documents are never uploaded to a cloud, ensuring maximum data security.</li>
    <li><strong>Smart EMF/WMF Filtering</strong>: Built-in protection against legacy Microsoft vector formats to prevent rendering crashes and ensure PDF stability.</li>
    <li><strong>Auto-Pagination & Centering</strong>: Automatically calculates content dimensions to center your tables and text perfectly on A4 PDF pages.</li>
    <li><strong>Batch Processing</strong>: Upload multiple files at once and download them as a single ZIP archive or individual PDFs.</li>
    <li><strong>Modern UI</strong>: Responsive interface with Dark/Light mode support, featuring real-time conversion previews and progress tracking.</li>
</ul>

<h2>🛠️ How it works</h2>
<ol>
    <li><strong>File Upload</strong>: Select or drag and drop your Office documents into the converter.</li>
    <li><strong>Local Parsing</strong>: 
        <ul>
            <li><strong>Mammoth.js</strong> extracts raw text and styles from Word files.</li>
            <li><strong>SheetJS (XLSX)</strong> parses complex spreadsheet data and grids.</li>
        </ul>
    </li>
    <li><strong>Virtual Rendering</strong>: The app creates a hidden, high-fidelity HTML representation of the document, applying custom CSS for professional typography.</li>
    <li><strong>Canvas Capture</strong>: <strong>html2canvas</strong> takes a "vector-like" snapshot of the rendered content, handling high-resolution scaling (2x) for crisp text.</li>
    <li><strong>PDF Generation</strong>: <strong>jsPDF</strong> assembles the captured frames into a standardized PDF/A compatible document.</li>
</ol>

<h2>🏆 What makes it special?</h2>
<ul>
    <li><strong>No Subscription/API Keys</strong>: Unlike other converters that rely on Adobe or Google Drive APIs, this tool is completely free and has no usage limits.</li>
    <li><strong>Legacy Format Handling</strong>: While most client-side converters crash when meeting old Word "SmartArt" or EMF images, this tool uses a <em>Graceful Degradation</em> logic to replace unsupported elements with clean placeholders.</li>
    <li><strong>Pure Javascript</strong>: It demonstrates the power of modern Web APIs, handling heavy document conversion without a backend (Node.js/Python).</li>
</ul>

<h2>⚡ Getting Started</h2>

<h3>Online</h3>
<p>Simply visit the <a href="https://r0mb0.github.io/Office_to_pdf_cloud/">Live Demo</a>.</p>

<h3>Usage Notes</h3>
<ul>
    <li><strong>Excel Files</strong>: Large spreadsheets are automatically scaled to fit the PDF width.</li>
    <li><strong>Word Styles</strong>: Basic formatting (Bold, Italics, Lists, Headers) is preserved. Complex floating text boxes may be linearized.</li>
</ul>

<h2>🙏 Credits & Inspiration</h2>
<ul>
    <li><a href="https://github.com/mwilliamson/js-mammoth">Mammoth.js</a> for DOCX to HTML conversion.</li>
    <li><a href="https://sheetjs.com/">SheetJS</a> for spreadsheet processing.</li>
    <li><a href="https://html2canvas.hertzen.com/">html2canvas</a> & <a href="https://github.com/parallax/jsPDF">jsPDF</a> for the PDF engine.</li>
</ul>

<a href="https://github.com/R0mb0/Crafted_with_AI">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/CraftedWithAIDark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/NotMadeByAILight.svg">
    <img alt="Crafted with AI" src="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/NotMadeByAIDefault.svg">
  </picture>
</a>

const fs = require('fs');
const path = require('path');

// Simple PDF text extraction (works for basic PDFs)
const pdfPath = path.join(__dirname, 'Manglam_resume2.pdf');
const pdfBuffer = fs.readFileSync(pdfPath);
const pdfText = pdfBuffer.toString('latin1');

// Extract text between stream and endstream
const textMatches = pdfText.match(/stream\s+(.*?)\s+endstream/gs);
if (textMatches) {
    textMatches.forEach((match, i) => {
        const text = match.replace(/stream\s+/, '').replace(/\s+endstream/, '');
        console.log(`\n--- Section ${i + 1} ---`);
        console.log(text);
    });
}

// Try to find readable text
const readableText = pdfText.match(/[A-Za-z]{3,}[\s\S]{0,200}/g);
if (readableText) {
    console.log('\n--- Readable Text Fragments ---');
    readableText.slice(0, 50).forEach(text => {
        if (text.length > 10 && /[A-Z][a-z]/.test(text)) {
            console.log(text.substring(0, 100));
        }
    });
}

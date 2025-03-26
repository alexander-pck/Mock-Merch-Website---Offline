// function generateQRCode(obj) {


//     const jsonString = JSON.stringify(obj);
//     if(jsonString.length % 5744 > 1) {

//     }
//     // Generate the QR code
//     const errorCorrectionLevel = 'Q'; // Error correction level (L, M, Q, H)
//     const typeNumber = 25// calculateTypeNumber(jsonString.length,errorCorrectionLevel); // QR code version (adjust as needed)
//     console.log(typeNumber)
//     const qr = qrcode(typeNumber, errorCorrectionLevel);
//     qr.addData(jsonString);
//     qr.make();

//     // Display the QR code as an image
//     const qrCodeElement = document.getElementById('qrcode');
//     qrCodeElement.innerHTML = qr.createImgTag();
// }
function generateQRCode(obj) {
    const qrCodeElement = document.getElementById('qrcode');
    qrCodeElement.innerHTML = ""
    const jsonString = JSON.stringify(obj);
    const maxBitSize = 3770;

    console.log(calculateBitSize(jsonString))
    if (calculateBitSize(jsonString) <= maxBitSize) {
        // Generate a single QR code for the data
        generateSingleQRCode(jsonString,qrCodeElement);
    } else {
        // Split the data into multiple chunks and generate QR codes
        const chunks = splitDataIntoChunks(jsonString, maxBitSize);
        for (let i = 0; i < chunks.length; i++) {
            generateSingleQRCode(chunks[i],qrCodeElement);
        }
    }
}



function generateSingleQRCode(data,qrCodeElement) {
    // Generate the QR code
    const errorCorrectionLevel = 'Q';
    const typeNumber = 20;
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data);
    qr.make();

    // Display the QR code as an image
    const qrImageTag = qr.createImgTag();
    qrCodeElement.innerHTML += qrImageTag;
}

function calculateBitSize(data) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(data);
    const bitSize = bytes.length * 8;
    return bitSize;
}
function splitDataIntoChunks(data, maxBitSize) {
    const chunks = [];
    let currentChunk = '';
    
    for (let i = 0; i < data.length; i++) {
        const chunk = currentChunk + data[i];
        const chunkBitSize = calculateBitSize(chunk);
        
        if (chunkBitSize <= maxBitSize) {
            currentChunk = chunk;
        } else {
            // Start a new chunk
            chunks.push(currentChunk);
            currentChunk = data[i];
        }
    }
    
    if (currentChunk) {
        chunks.push(currentChunk);
    }
    console.log(chunks.length)
    
    return chunks;
}
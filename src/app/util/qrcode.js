// util/qrcode.js
const qrcode = require('qrcode');

async function generateQRCode(address, amount) {
  try {
    const paymentInfo = {
      to: address,
      value: amount,
    };

    const qrCodeDataUrl = await qrcode.toDataURL(JSON.stringify(paymentInfo));

    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}

module.exports = {
  generateQRCode,
};

const crypto = require('crypto');

// secret that was appended to the webhook
const secret = '<your secret here>';

// signing the secret with the timestamp from the request
function sign(secret, timestamp) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(timestamp);
  return hmac.digest('hex');
}

function webhook(req) {
  // tomorrow.io signature header is "t={timestamp},sig={signature}"
  const signatureHeader = req.headers['X-Signature'].split(',');
  // extract timestamp
  const timestamp = signatureHeader[0].split('=')[1];
  // extract signature
  const signature = signatureHeader[1].split('=')[1];
  // getting the expected signature
  const expectedSignature = sign(secret, timestamp);

  if (signature !== expectedSignature) {
    throw new Error();
  }
}
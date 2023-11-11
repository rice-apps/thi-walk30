// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSms = (number, verifySid) => {
  client.verify.v2
  .services(verifySid)
  .verifications.create({ to: number, channel: "sms" })
  .then((verification) => verification.status);
}

const verify = (number, verifySid, code) => {
  client.verify.v2.services(verifySid)
      .verificationChecks
      .create({to: number, code: code})
      .then(verification_check => verification_check.status);
}

module.exports = {
  sendSms,
  verify
}
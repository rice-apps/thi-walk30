// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC5a42a66eeb756958bef574056bc615aa";
const authToken = "7599177e84948a4ac62e46f9210ceec6";
const verifySid = "VAddeb0650e4bdfd3e18ebf64ce6b1d152";
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
require('dotenv').config;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log("a");
console.log(accountSid);
console.log("b");
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.accounts.v1.authTokenPromotion()
//   .update()
//   .then(auth_token_promotion => console.log(auth_token_promotion.dateCreated));
  
// client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//                 .verifications
//                 .create({to: '+12488479332', channel: 'sms'})
//                 .then(verification => console.log(verification.status));

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12488479332',
     to: '+12488479332'
   })
  .then(message => console.log(message.sid));
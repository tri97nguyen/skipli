var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var twilio = require('twilio');
var express = require('express');
const bodyParser = require('body-parser');

var client = new twilio(accountSid, authToken);
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
var MessageResponse = require('twilio').twiml.MessagingResponse;

const sendSMS = () => {
    client.messages.create({
        body: 'Hello from Node',
        to: '+18609648456',  // Text this number
        from: '+18605306660' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));
}
app.get('/sms', (req, res, next) => res.send('sms homepage'));

app.post('/sms', (req, res, next) => {
    console.log(req.body.Body);
    const twiml = new MessageResponse();
    twiml.message(`Did you say ${req.body.Body}?`);
    res.writeHead(200, { 'Content-type': "text/xml" });
    res.end(twiml.toString());
});


sendSMS();
app.listen(1337, () => console.log("server listening..."));
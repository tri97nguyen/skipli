var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var twilio = require('twilio');
var express = require('express');
const bodyParser = require('body-parser');

var client = new twilio(accountSid, authToken);
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
var MessageResponse = require('twilio').twiml.MessagingResponse;

exports.sendSMS = (textMessage, toNumber) => {
    client.messages.create({
        body: textMessage,
        to: toNumber,  // Text this number
        from: '+18605306660' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));
}

exports.replyToInboundSMS = (req, res, next) => {
    console.log(req.body.Body);
    const inboundMessage = req.body.Body;
    const twiml = new MessageResponse();
    twiml.message(req.replyMessage);
    res.writeHead(200, { 'Content-type': "text/xml" });
    res.end(twiml.toString());
}

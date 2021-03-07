var accountSid = "AC98bcee49cf020652576afb230c0c51b9"; // I attached accountSid in email
var authToken = "84b1f434cb861a0cffb0e49688a4eeef"; // I attached authToken in email


var twilio = require('twilio');
var express = require('express');

var client = new twilio(accountSid, authToken);

exports.sendSMS = (textMessage, toNumber) => {
    client.messages.create({
        body: textMessage,
        to: toNumber,  // Text this number
        from: '+18605306718' // From a valid Twilio number
    }).then((message) => console.log(message.sid));
}

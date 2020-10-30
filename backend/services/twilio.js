var accountSid = "accountSid"; // I attached accountSid in email
var authToken = "authToken"; // I attached authToken in email


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

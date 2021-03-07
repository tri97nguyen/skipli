<<<<<<< HEAD
var accountSid = "AC98bcee49cf020652576afb230c0c51b9"; // I attached accountSid in email
var authToken = "84b1f434cb861a0cffb0e49688a4eeef"; // I attached authToken in email
=======
var accountSid = "accountSid"; // I attached accountSid in email
var authToken = "authToken"; // I attached authToken in email
>>>>>>> 168c7507289337205e4bec2db0d623d4991ebb8a


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

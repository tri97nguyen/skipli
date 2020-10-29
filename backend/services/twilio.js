var accountSid = "AC90cb7dd6ead959ae5a48904d6606156d";
var authToken = "b95f26b17082dfcefd64a545473d34da";

var twilio = require('twilio');
var express = require('express');

var client = new twilio(accountSid, authToken);

exports.sendSMS = (textMessage, toNumber) => {
    client.messages.create({
        body: textMessage,
        to: toNumber,  // Text this number
        from: '+18605306660' // From a valid Twilio number
    }).then((message) => console.log(message.sid));
}

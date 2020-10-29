var express = require('express');
var messageRouter = express.Router();
var firebase = require('firebase');
var db = firebase.firestore()
var CreateNewAccessCode = require('../services/nonce').CreateNewAccessCode;
var ValidateAccessCode = require('../services/nonce').ValidateAccessCode


messageRouter.route('/')
    .get((req, res, next) => {
        res.json({ message: "hello world" });
    })
    .post(async (req, res, next) => {
        console.log(`phone is ${JSON.stringify(req.body.phone)} | nonce is ${JSON.stringify(req.body.nonce)} `);
        const phoneNum = req.body.phone;
        const nonce = req.body.nonce;
        if (nonce == "") {
            await CreateNewAccessCode(phoneNum);
            res.json({ message: `a 6-digit code has been sent to ${phoneNum}` })
        }
        else {
            const result = await ValidateAccessCode(nonce, phoneNum);
            res.json(result);
        }

    })

module.exports = messageRouter;
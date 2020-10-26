var express = require('express');
var messageRouter = express.Router();
var firebase = require('firebase');

var db = firebase.firestore()

messageRouter.route('/')
    .get((req, res, next) => {

        res.json({ message: "hello world" });
    })
    .post((req, res, next) => {

    })
// WRITE/READ INTO DATABASE
// db.collection("phones").get().then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.data());
//     });
// });
// db.collection('phones').add({ number: "8609648456", nonce: "123" })

function createNewAccessCode() {
    var nonce;
    while ((nonce = Math.floor(Math.random() * 1000000)) < 100000);
    return nonce;
}

module.exports = messageRouter;
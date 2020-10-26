var express = require('express');
var messageRouter = express.Router();
var firebase = require('firebase');

var db = firebase.firestore()

messageRouter.route('/')
    .all(corsAllow)
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

function corsAllow(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  }
module.exports = messageRouter;
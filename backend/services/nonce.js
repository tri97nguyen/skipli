var firebase = require('firebase');
var db = firebase.firestore()
var twilio = require('./twilio');

exports.CreateNewAccessCode = async (phoneNum) => {
    var nonce;
    while ((nonce = Math.floor(Math.random() * 1000000)) < 100000);
    await db.collection("phones").add({ number: phoneNum, nonce: nonce.toString() })
    await twilio.sendSMS(nonce, phoneNum);
}

exports.ValidateAccessCode = async (accessCode, phoneNumber) => {
    const snapshot = await db.collection("phones")
        .where('number', '==', phoneNumber)
        .where('nonce', '==', accessCode)
        .get()
    if (snapshot.empty) return ({ authenticated: false });
    else {
        snapshot.forEach(doc => doc.ref.delete())
        return ({ authenticated: true });
    }
}
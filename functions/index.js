const functions = require('firebase-functions');
const express = require('express');
const app = express();
const swag = require('./swagger.json');


app.get('/swagger', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(swag);
})

// const obj = require('./try.json');

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("value"+ obj.key);
// });

exports.api=functions.https.onRequest(app);

exports.swagger = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(swag)
});

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


/**
 * @swagger
 * /swagger:
 *   get:
 *     description: Get the API Document JSON through this end point
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */
exports.swagger = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(swag)
});

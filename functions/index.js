const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

// const express = require('express');
// const cors = require('cors');

const ssr = require('./ssr/ssr')

// const app = express();

exports.host = functions.https.onRequest((req, res) => {
    ssr.ssrWorker(req, res)
});
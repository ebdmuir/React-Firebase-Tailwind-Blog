const admin = require('firebase-admin');
const serviceAccount = require("./YOUR_SERVICEACCOUNTKEY.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const express = require("express");

const cors = require('cors');

const morgan = require('morgan');
const _ = require('lodash');

const app = express();


//add other middleware
app.use(cors());
app.use(require("body-parser").text());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/setAdmin' , async (req,res) =>{
    admin.auth()
        .setCustomUserClaims('YOUR_FIREBASE_UID',{
            type:'administrator'
        })
        .then(()=>console.log('done'))
})


app.listen(4000, () => console.log("Listening on port 4000"));
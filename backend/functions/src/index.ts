import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { v4 as uuidv4 } from 'uuid';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { FirebaseDatabase } from './FirebaseDatabase';
import { TwittearModel } from './models/twiitear';
import moment = require('moment');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);

const app = express();
app.use(bodyParser.json());

// CORS handling
app.use(cors());

const database = new FirebaseDatabase();

app.get('/healt', (req, res) => {
    return res.json({
        status: 'ok'
    })
})

app.post('/twittear', async (req, res) => {
    try {
        const twittear = TwittearModel(req.body);
        console.log('*   twittear')
        console.log(twittear)
        const currentMoment =moment().unix();
        await database.save(`tweets/${uuidv4()}`, {...twittear, created: currentMoment})
        console.log('*   twittear')
        return res.status(200).json({
            status: 'ok',
            data: twittear
        })
    } catch (error) {
        return res.status(400).json({
            status: 'false'
        })
    }

})

export const twitterClone = functions.https.onRequest(app);
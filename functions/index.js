const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.stripeSecretKey);

// API

// App config

const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get('/', (req, res) =>
    res.status(200).send('Hello World'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received for this amount: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of currency
        currency: "eur",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
    
// Listen command

exports.api = functions.https.onRequest(app);
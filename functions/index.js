const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51ITovvInMnQEmZQ36uS91ndKIZouMHO6xlMuG36RzCn7Ea48lIz1gOa8G1tRGEJTRVUKP6WQ48r0YxA1C7yJlcT600LA5If6wL')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "usd",
    });

    // OK - Created for 201
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/ecomaz-638c3/us-central1/api
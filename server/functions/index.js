/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

require("dotenv").config();
const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for our JSON data

app.use(express.json());

// Cross origin

const cors = require("cors");
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// Firebase Credentials

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// Api endpoints
app.get("/", (req, res) => {
  return res.send("helllo world");
});

const userRoute = require("./routes/users");
app.use("/api/users", userRoute);

const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

exports.app = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

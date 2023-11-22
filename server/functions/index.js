/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// cross origin configuration [Last updated 22/11/23]

// import cors from "cors";
// const prodOrigin = [process.env.ORIGIN_1, process.env.ORIGIN_2];
// const devOrigin = ["http://localhost:5173"];
// const allowedOrigins =
//   process.env.NODE_ENV === "production" ? prodOrigin : devOrigin;
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (allowedOrigins.includes(origin)) {
//         console.log(origin, allowedOrigins);
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );



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

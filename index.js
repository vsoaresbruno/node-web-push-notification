const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BLNmiPDzImfXdYUKPH7utULATsQWTXw0ZvuxxT9lKeCcUj2P_9L2DdU3qWLxJGP_04FdwT5yz7A3KV-lBHDbYjc";
const privateVapidKey = "bQsHiCSK80UF3Yk5dAqV8WKM4HubKYV7oGwFjeyaUqg";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get push subscription object
  const subscription = req.body;

  // Send 201 -resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.log(err));
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

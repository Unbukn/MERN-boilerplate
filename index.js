// **** DEPENDENCIES ****
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8001;
const ENV = process.env.NODE_ENV || 'development';
const app = express();
// **** MIDDLEWARE ****
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (ENV === "production") {
  app.use(express.static("client/build"));
}
// **** API ROUTES ****

// **** REACT ROUTES ****
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

//  **** INIT SERVER ****
app.listen(PORT, () => {
    console.log(`🌎 ==> Server Running on: PORT ${PORT}! ENV ${ENV}!`);
  });

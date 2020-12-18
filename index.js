// **** DEPENDENCIES ****
const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
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
app.use(routes);
// **** REACT ROUTES ****
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
// **** DATABASE ****
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernboilerplate", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
//  **** INIT SERVER ****
app.listen(PORT, () => {
    console.log(`🌎 ==> Server Running on: PORT ${PORT}! ENV ${ENV}!`);
  });

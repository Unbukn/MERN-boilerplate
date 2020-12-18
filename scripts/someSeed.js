const mongoose = require("mongoose");
const db = require("../models");

// **** This file empties the SomeData collection ****
// **** and inserts sample data ****

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mernboilerplate", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
const someSeedData = [
  {
    someString: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    someNumber: Math.floor(Math.random() * 100),
    someBuffer: null,
    someBoolean: false ,
    someArray: ["Enjoy","This", "Some", "Data"],
    date: new Date(Date.now()),
  },
  {
    someString: "over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    someNumber: Math.floor(Math.random() * 10),
    someBuffer: null,
    someBoolean: true ,
    someArray: ["Enjoy","This", "Some", "Data"],
    date: new Date(Date.now()),
  },
  {
    someString: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
    someNumber: Math.floor(Math.random() * 4),
    someBuffer: null,
    someBoolean: false ,
    someArray: ["Enjoy","This", "Some", "Data"],
    date: new Date(Date.now()),
  },
  {
    someString: "tin words, consectetur, from a Lorem Ipsum passage, and going through the cites ",
    someNumber: Math.floor(Math.random() * 15),
    someBuffer: null,
    someBoolean: true ,
    someArray: ["Enjoy","This", "Some", "Data"],
    date: new Date(Date.now()),
  }
];

db.SomeData.remove({})
  .then(() => db.SomeData.collection.insertMany(someSeedData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

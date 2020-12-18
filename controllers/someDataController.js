const db = require("../models");

// **** FULL CRUD METHODS FOR SomeData BELOW ****
module.exports = {
  // **** GET ****
  findAll: function(req, res) {
    console.log("Finding all entries")
    db.SomeData
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // **** GET ****
  findById: function(req, res) {
    db.SomeData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // **** POST ****
  create: function(req, res) {
    db.SomeData
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // **** PUT ****
  update: function(req, res) {
    db.SomeData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // **** DELETE ****
  remove: function(req, res) {
    db.SomeData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

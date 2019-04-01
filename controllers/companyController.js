const db = require("../models");

// Defining methods for the exampleController
module.exports = {
  findAll: function(req, res) {
    db.Company.find(req.query)
      .sort({ name: -1 })
      .then(companies => res.json(companies))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Company.findById(req.params.id)
      .then(company => res.json(company))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Company.create(req.body)
      .then(company => res.json(company))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Company.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(company => res.json(company))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Company.findById({ _id: req.params.id })
      .then(company => company.remove())
      .then(company => res.json(company))
      .catch(err => res.status(422).json(err));
  },
  getCompanyProducts: function(req, res) {
    db.Product.find({
      companyId: req.params.id
    })
    .then(products => res.json(products))
    .catch(err => res.status(422).json(err));
  }
};

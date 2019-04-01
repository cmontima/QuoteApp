const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Example collection and inserts some test documents below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/finalclassproject"
);

let companySeed = [
  {
    name: "Company 1",
    address: "Ejemplo direccion 1 Colonia 1",
    state: "Nuevo leon",
    phone: 1234567890,
    sector: "aserradero"
  },
  {
    name: "Company 2",
    address: "Ejemplo direccion 1 Colonia 1",
    state: "Nuevo leon",
    phone: 1234567890,
    sector: "aserradero"
  },
  {
    name: "Company 3",
    address: "Ejemplo direccion 1 Colonia 1",
    state: "Nuevo leon",
    phone: 1234567890,
    sector: "aserradero"
  },
  {
    name: "Company 4",
    address: "Ejemplo direccion 1 Colonia 1",
    state: "Nuevo leon",
    phone: 1234567890,
    sector: "aserradero"
  }
];

db.Company.remove({})
  .then(() => db.Company.insertMany(companySeed))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

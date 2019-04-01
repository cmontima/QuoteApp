const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  phone: { type: Number, required: true },
  employees: { type: Array, default: [] },
  products: { type: Array, default: [] }
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;

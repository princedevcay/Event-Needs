/* eslint-disable no-undef */
// models/VendorPackage.js
const mongoose = require('mongoose');

const vendorPackageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  features: [String],
  isPopular: Boolean
});

const VendorPackage = mongoose.model('VendorPackage', vendorPackageSchema);

module.exports = VendorPackage;

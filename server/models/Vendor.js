/* eslint-disable no-undef */
// models/Vendor.js
const mongoose = require('mongoose');

const servicePackageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  // Add other package-specific fields as needed
});

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  servicesOffered: [String],
  website: String,
  contactPerson: {
    name: String,
    email: String,
    phone: String
  },
  yearsOfExperience: Number,
  businessDocuments: [String], // Array of URLs/paths to documents
  servicePackages: [servicePackageSchema], // Array of service packages
  location: String,
  socialMediaLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  // Additional fields as required
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;

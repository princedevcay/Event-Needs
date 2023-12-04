/* eslint-disable no-undef */
// controllers/vendorController.js
const Vendor = require('../models/Vendor'); // Update this path to your Vendor model

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  const vendor = new Vendor(req.body);
  try {
    const newVendor = await vendor.save();
    res.status(201).json(newVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a vendor
exports.updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(updatedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a vendor
exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add a service package to a vendor
exports.addServicePackage = async (req, res) => {
  const vendorId = req.params.vendorId;
  const servicePackage = req.body;

  try {
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    vendor.servicePackages.push(servicePackage);
    await vendor.save();
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
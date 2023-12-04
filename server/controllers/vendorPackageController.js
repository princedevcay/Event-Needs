// controllers/vendorPackageController.js
const VendorPackage = require('../models/VendorPackage'); // Adjust the path as necessary

// Get all vendor packages
exports.getAllVendorPackages = async (req, res) => {
  try {
    const packages = await VendorPackage.find();
    res.json(packages);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching vendor packages' });
  }
};

// Get a single vendor package
exports.getVendorPackage = async (req, res) => {
  try {
    const package = await VendorPackage.findById(req.params.id);
    if (!package) {
      return res.status(404).send({ message: 'Vendor package not found' });
    }
    res.json(package);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching vendor package' });
  }
};

// Create a new vendor package
exports.createVendorPackage = async (req, res) => {
  const newPackage = new VendorPackage(req.body);
  try {
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(400).send({ message: 'Error creating vendor package' });
  }
};

// Update a vendor package
exports.updateVendorPackage = async (req, res) => {
  try {
    const updatedPackage = await VendorPackage.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedPackage) {
      return res.status(404).send({ message: 'Vendor package not found' });
    }
    res.json(updatedPackage);
  } catch (error) {
    res.status(400).send({ message: 'Error updating vendor package' });
  }
};

// Delete a vendor package
exports.deleteVendorPackage = async (req, res) => {
  try {
    const package = await VendorPackage.findByIdAndDelete(req.params.id);
    if (!package) {
      return res.status(404).send({ message: 'Vendor package not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: 'Error deleting vendor package' });
  }
};

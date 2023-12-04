/* eslint-disable no-undef */
// routes/vendorPackageRoutes.js
const express = require('express');
const router = express.Router();
const vendorPackageController = require('../controllers/vendorPackageController');

router.get('/vendor-packages', vendorPackageController.getAllVendorPackages);
router.get('/vendor-packages/:id', vendorPackageController.getVendorPackage);
router.post('/vendor-packages', vendorPackageController.createVendorPackage);
router.put('/vendor-packages/:id', vendorPackageController.updateVendorPackage);
router.delete('/vendor-packages/:id', vendorPackageController.deleteVendorPackage);

module.exports = router;

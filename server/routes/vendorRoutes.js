/* eslint-disable no-undef */
// routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.get('/vendors', vendorController.getAllVendors);
router.get('/vendors/:id', vendorController.getVendorById);
router.post('/vendors', vendorController.createVendor);
router.put('/vendors/:id', vendorController.updateVendor);
router.delete('/vendors/:id', vendorController.deleteVendor);
router.post('/vendors/:vendorId/service-packages', vendorController.addServicePackage);


module.exports = router;

// insertVendorPackages.js
/* eslint-disable no-undef */
require('dotenv').config();
const mongoose = require('mongoose');
const VendorPackage = require('./models/VendorPackage'); // Adjust the path as necessary

const dbUri = process.env.MONGO_URI; // Replace with your MongoDB URI from .env

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const vendorPackages = [
  {
    title: 'Starter Showcase Package',
    price: 150,
    features: [
      'Basic listing in the marketplace directory',
      'Profile page with up to 5 photos and a brief business description',
      'Access to community forums',
      'Monthly inclusion in the marketplace newsletter'
    ],
    isPopular: false
  },
  {
    title: 'Social Spotlight Package',
    price: 300,
    features: [
      'Enhanced profile with up to 15 photos and detailed business description',
      'Bi-weekly social media shoutouts',
      'Featured in one marketplace blog post per month',
      'Access to advanced analytics'
    ],
    isPopular: true
  },
  {
    title: 'Premier Promotion',
    price: 500,
    features: [
      'All features from the Social Spotlight Package',
      'Featured spot on the marketplace homepage for two weeks for high visibility',
      'Sponsored advertisement placements in targeted customer email campaigns',
      'Opportunity to participate in quarterly virtual networking events with premium clients'
    ],
    isPopular: false
  },
  {
    title: 'Elite Engagement Package',
    price: 800,
    features: [
      'All features from the Premier Promotion Package',
      'Top-tier placement in marketplace search results',
      'A custom video promotion featured on the marketplace website and social media channels',
      'Personalized marketing consultation to develop effective strategies',
      'Hosting opportunities for webinars or workshops through the marketplace enhancing brand authority',


    ],
    isPopular: false
  },
];

VendorPackage.insertMany(vendorPackages)
  .then(() => {
    console.log('Vendor packages inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting vendor packages:', error);
    mongoose.connection.close();
  });

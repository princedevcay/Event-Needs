/* eslint-disable no-undef */
const express = require('express');
const app = express();
const path = require('path');

/// Serve static files from "public/images" directory
app.use('/public/images', express.static(path.join(__dirname, 'public', 'images')));


// Mock data array
const vendors = [
      {
        id: 1,
        name: 'Avalon Photography',
        imageUrl: 'https://picsum.photos/id/100/200/300',
        rating: 5,
        reviewCount: 43,
        location: 'Alabama and Beyond',
        priceRange: '$1,000-$1,999',
        description: 'Destination Wedding Photography',
        isFeatured: true,
      },
      {
      id: 2,
      name: 'Elegant Events',
      imageUrl: 'https://picsum.photos/id/101/200/300',
      rating: 4.8,
      reviewCount: 30,
      location: 'New York, NY',
      priceRange: '$2,000-$2,999',
      description: 'Chic Event Planning and Design',
    },
    {
      id: 3,
      name: 'Blooms and Blossoms',
      imageUrl: 'https://picsum.photos/id/102/200/300',
      rating: 4.6,
      reviewCount: 21,
      location: 'San Francisco, CA',
      priceRange: '$500-$999',
      description: 'Exquisite Floral Arrangements',
    },
    {
      id: 4,
      name: 'Gourmet Gala Catering',
      imageUrl: '../server/public/images/1.jpg',
      rating: 4.7,
      reviewCount: 28,
      location: 'Miami, FL',
      priceRange: '$50-$100 per person',
      description: 'Sophisticated Catering Services',
    },
    {
      id: 5,
      name: 'Harmony DJs',
      imageUrl: '../server/public/images/1.jpg',
      rating: 4.9,
      reviewCount: 52,
      location: 'Austin, TX',
      priceRange: '$700-$1,400',
      description: 'Vibrant DJ Services for Any Occasion',
    },
    {
      id: 6,
      name: 'Limelight Limos',
      imageUrl: '../server/public/images/1.jpg',
      rating: 4.5,
      reviewCount: 18,
      location: 'Chicago, IL',
      priceRange: '$100-$300',
      description: 'Luxury Transportation Solutions',
    },
];

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    name: 'Alex Smith',
    rating: 5,
    content: 'Absolutely fantastic service! The photos were stunning, and the photographer made everyone feel at ease.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Samantha Brown',
    rating: 4,
    content: 'Great experience overall, the photos came out beautifully, but the session felt a bit rushed.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    rating: 5,
    content: 'Incredible attention to detail. They captured all the right moments. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Lily Evans',
    rating: 3,
    content: 'Decent work, but I was expecting a bit more creativity in the shot composition.',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    name: 'David Wilson',
    rating: 4,
    content: 'The photographer was professional and the photos are good, but delivery was delayed by a few days.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 6,
    name: 'Isabella Brown',
    rating: 5,
    content: 'The team went above and beyond to capture the perfect shots for our engagement. Truly exceptional!',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 7,
    name: 'Ethan Hunt',
    rating: 2,
    content: 'The final photos were okay, but the photographer was late and the communication was poor throughout.',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 8,
    name: 'Emma Watson',
    rating: 5,
    content: 'A delightful photoshoot experience! The photographer was brilliant and made the session fun and relaxing.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 9,
    name: 'Noah Smith',
    rating: 3,
    content: 'Average service, nothing stood out particularly. The photos were as expected, nothing more.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 10,
    name: 'Olivia Davis',
    rating: 5,
    content: 'Superb quality and excellent service! They captured our special day perfectly.',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },

];

// Enable CORS for client-side to access this server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint to get vendors
app.get('/api/vendors', (req, res) => {
  res.json(vendors);
});

// Serve the mock reviews when a GET request is made to the '/api/reviews' endpoint
app.get('/api/reviews', (req, res) => {
  res.json(mockReviews);
});


app.get('/api/services', (req, res) => {
  res.json(servicesData);
});

module.exports = app;

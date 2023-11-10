import { Box, Image, Text, Heading } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import fv1 from '../assets/fv1.jpg'; // Example image import

function FeaturedVendors() {
  const vendors = [
    { name: 'Vendor 1', image: fv1, description: 'Great Event Photography' },
    // ...more vendors
  ];

  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Box py={10} bg="brown.50">
      <Heading as="h2" size="xl" textAlign="center" fontFamily="heading" color="brown.800">
        Featured Vendors
      </Heading>
      <Box mt={6} mx={12} mb={10}>
        <Slider {...settings}>
          {vendors.map((vendor, index) => (
            <Box key={index} shadow="md" borderWidth="1px" p={5} bg="white">
              <Image src={vendor.image} alt={vendor.name} />
              <Text mt={2} fontFamily="body" color="brown.700">
                {vendor.description}
              </Text>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default FeaturedVendors;

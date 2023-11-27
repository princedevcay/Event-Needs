import { Box, Heading, Text, Button, Center, Container } from '@chakra-ui/react';
import FeaturedVendor from './FeaturedVendor';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Creating a motion component for Box
const MotionBox = motion(Box);

function FeaturedVendorsList() {
  const vendors = [
    { title: "Photography", subtitle: "Art of shadows", imageSrc: "https://source.unsplash.com/featured/?photography" },
    { title: "Fine Dining", subtitle: "Venues & more", imageSrc: "https://source.unsplash.com/featured/?dining" },
    { title: "Essentials", subtitle: "Wedding checklist", imageSrc: "https://source.unsplash.com/featured/?wedding" },
    { title: "Event Planning", subtitle: "Make it perfect", imageSrc: "https://source.unsplash.com/featured/?event" },
    { title: "Floral Designs", subtitle: "Bouquets & Decor", imageSrc: "https://source.unsplash.com/featured/?floral" },
    { title: "Music Bands", subtitle: "Live music", imageSrc: "https://source.unsplash.com/featured/?musicband" },
    { title: "Catering", subtitle: "Delicious menus", imageSrc: "https://source.unsplash.com/featured/?catering" },
    { title: "Bridal Wear", subtitle: "Dresses & Suits", imageSrc: "https://source.unsplash.com/featured/?bridalwear" },
    { title: "Travel", subtitle: "Honeymoon packages", imageSrc: "https://source.unsplash.com/featured/?travel" },
    { title: "Jewelry", subtitle: "Elegant pieces", imageSrc: "https://source.unsplash.com/featured/?jewelry" },
    { title: "Cake Artists", subtitle: "Custom cakes", imageSrc: "https://source.unsplash.com/featured/?cake" },
    { title: "Makeup Artists", subtitle: "Look your best", imageSrc: "https://source.unsplash.com/featured/?makeupartist" },
    // ... more vendors
  ];
  
  
  

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <MotionBox initial="hidden" animate="visible" py={10} bg="brown.50">
      <Container maxW="container.xl"  borderRadius={"xl"}>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Featured Vendors
      </Heading>
      <Text textAlign="center" mt={2} mb={6} fontFamily="body">
        Browse The List Of Featured Vendors 
      </Text>
      <Slider {...settings}>
        {vendors.map((vendor, index) => (
          <Box key={index} p={5}>
            <FeaturedVendor
              title={vendor.title}
              subtitle={vendor.subtitle}
              imageSrc={vendor.imageSrc}
            />
          </Box>
        ))}
      </Slider>
      <Center mt={10}>
        <Button colorScheme="brown" variant="solid">
          Browse more Vendors
        </Button>
      </Center>
      </Container>
    </MotionBox>
  );
}

export default FeaturedVendorsList;

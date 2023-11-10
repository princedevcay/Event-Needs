import Slider from 'react-slick';
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Link,
  Heading,
  Text
} from '@chakra-ui/react';
import { Link as ReactScrollLink } from 'react-scroll';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import VendorAboutSection from '../components/VendorAboutSection';
import PhotographyServicesSection from '../components/PhotographyServicesSection'; 
import PricingSection from '../components/PricingSection';
import ReviewSection from '../components/ReviewSection';
import image1 from '../assets/blog-sample.jpg'

function VendorPage() {
  // Navigation items mapped to section IDs
  const navItems = ['photos', 'about', 'details', 'pricing', 'reviews', 'team', 'contact'];

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <Header />
    <Box>
      {/* Image Carousel */}
      <Slider {...settings} className="slider-container">
        {/* Replace with your image paths */}
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 1" />
        </Box>
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 2" />
        </Box>
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 3" />
        </Box>
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 3" />
        </Box>
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 3" />
        </Box>
        <Box p={4}>
          <img src={image1} className="slider-image" alt="Carousel Image 3" />
        </Box>
        {/* ...more images as needed */}
      </Slider>

      {/* Main content grid */}
      <Grid templateColumns={{ md: "4fr 2fr" }} p={10} gap={6} mt={6}>
        {/* Navigation menu as the first column in the grid */}
        <GridItem>
          <HStack align="stretch" spacing={4} justifyContent="left" >
        {navItems.map((item) => (
          <ReactScrollLink
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Link
              p={2}
              fontSize="xl"
              fontWeight="bold"
              color="brown"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px solid",
                borderColor: "brown"
              }}
              cursor="pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize the first letter */}
            </Link>
          </ReactScrollLink>
        ))}
      </HStack>
          <Box id="photos"  mb={6}>
            {/* Photo Gallery Here */}
          </Box>
          <Box id="about" mb={6}>
          <VendorAboutSection />
          </Box>
          <Box id="details" mb={6}>
          <PhotographyServicesSection />
          </Box>
          <Box id="pricing" mb={6}>
            <PricingSection />
          </Box>
          <Box id="reviews" mb={6}>
            <ReviewSection />
          </Box>
          <Box id="team" mb={6}>
            {/* Team Information Here */}
          </Box>
        </GridItem>

        {/* Content sections as the second column in the grid */}
        <GridItem>
          <Box id="contact" mb={6} p={10} shadow={"xl"}>
            <Heading>Contact Vendor</Heading>
            <Text pb={4}>Leave your messsage for the vendor</Text>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
              <FormLabel>Email</FormLabel>
              <Input type="email" />
              <FormLabel>Message</FormLabel>
              <Textarea />
              <Button mt={4} colorScheme="brown">Submit</Button>
            </FormControl>
          </Box>
        </GridItem>
      </Grid>
    </Box>
    <Footer />
    </>
  );
}

export default VendorPage;

import Slider from 'react-slick';
import { Box, Button, Heading, Text, VStack, Center } from '@chakra-ui/react';
import image1 from '../assets/01.jpg';
import image2 from '../assets/02.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const sliderData = [
  {
    image: image2,
    text: 'Image 1 Text',
    buttonText: 'Button Text 1',
  },
  {
    image: image1,
    text: 'Image 2 Text',
    buttonText: 'Button Text 2',
  },
  {
    image: image1,
    text: 'Image 3 Text',
    buttonText: 'Button Text 3',
  }
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => (
        <Box key={index} position="relative" height="400px" width="full" > 
          <Box
            height="400px"
            width="full"
            backgroundImage={`url(${slide.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
          >
            {/* Center the VStack horizontally and vertically */}
            <Center height="full">
              <VStack
                spacing="4"
                textAlign="center"
              >
                <Heading as="h1" size="2xl" color="white">
                  Welcome to EventNeeds
                </Heading>
                <Text fontSize="xl" color="white">
                  Your one-stop platform for all event planning services.
                </Text>
                <Button colorScheme="brown">{slide.buttonText}</Button>
              </VStack>
            </Center>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};
export default ImageSlider;

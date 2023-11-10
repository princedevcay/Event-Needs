import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Avatar,
  Progress,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  useToast,
  Divider,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const ReviewSection = () => {
  const toast = useToast();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the server
    fetch('/api/reviews')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        // If your server also provides the summary, you can set it here
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        toast({
          title: 'Error',
          description: 'Unable to fetch reviews.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  }, []); // Empty dependency array to run only once on component mount

  const ratingsSummary = {
    total: reviews.length,
    detailed: [
      { stars: 5, percentage: 50 },
      { stars: 4, percentage: 30 },
      { stars: 3, percentage: 15 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 1 },
    ],
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Implement your review submission logic here
    // ...
    toast({
      title: 'Review submitted.',
      description: "Thank you for your feedback!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? "yellow.400" : "gray.300"} />
    ));
  };

  return (
    <Box p={5}>
      <Heading size="lg" textAlign="center">Customer Reviews</Heading>

      {/* Ratings Summary with Progress Bars */}
      <Box my={5}>
        <Heading size="md" mb={4}>Ratings Summary</Heading>
        <Stack spacing={2}>
          {ratingsSummary.detailed.map((item) => (
            <HStack key={item.stars} w="full" justify="space-between">
              <Text>{item.stars} Stars</Text>
              <Progress colorScheme="yellow" size="sm" value={item.percentage} flex="1" mx={4} />
              <Text width="50px">{item.percentage}%</Text>
            </HStack>
          ))}
        </Stack>
        <Text mt={2} fontSize="sm">Based on {ratingsSummary.total} reviews</Text>
      </Box>

      {/* Form to Leave a Review */}
      <VStack as="form" spacing={4} onSubmit={handleSubmitReview}>
        <Heading size="md">Write a Review</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="review">Your Review</FormLabel>
          <Textarea id="review" placeholder="Share your experience with us" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="rating">Rating</FormLabel>
          <Input id="rating" type="number" placeholder="Rate from 1 to 5" max={5} min={1} />
        </FormControl>
        <Button colorScheme="brown" variant="outline" type="submit">
          Submit Review
        </Button>
      </VStack>

      {/* Divider */}
      <Divider my={5} />

      {/* Display Reviews */}
      <VStack spacing={5} align="stretch">
        {reviews.map((review) => (
          <Box key={review.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue('white', 'gray.700')}>
            <HStack align="start" spacing={4}>
              <Avatar name={review.name} src={review.avatar} />
              <VStack align="start">
                <HStack>{renderStars(review.rating)}</HStack>
                <Text fontWeight="bold">{review.name}</Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>{review.content}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ReviewSection;

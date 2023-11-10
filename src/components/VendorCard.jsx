import { Box, Image, Badge, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function VendorCard({ vendor, isFeatured }) {
  // Destructure the properties from the vendor object prop
  const { name, imageUrl, rating, reviewCount, location, priceRange, description } = vendor;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" pos="relative">
      {isFeatured && (
        <Badge
          position="absolute" // Position the badge absolutely
          top="0" // At the top of the container
          left="0" // And to the left of the container
          zIndex="1" // Ensure it's above the image
          color="white" // Color scheme of the badge
          bg={'red'}
          m={2} // Margin for a little spacing from the corners
          px={2} // Horizontal padding
          py={1} // Vertical padding
        >
          Featured
        </Badge>
      )}
      <Image src={imageUrl} alt={`Image of ${name}`} objectFit="cover" height="200px" width="100%" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="brown">
            New
          </Badge>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {location} &bull; {priceRange}
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {name}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? "yellow.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>

        <Text mt={2}>
          {description}
        </Text>
      </Box>
    </Box>
  );
}

export default VendorCard;

import { Box, Image, Text, Button, useTheme } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function BlogPost({ title, subtitle, imageSrc, excerpt, readMoreUrl }) {
  const theme = useTheme();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={theme.colors.brown[50]}
      transition="transform 0.2s ease-in-out" // Add this line for transition effect
      _hover={{ // Add this pseudo-prop for hover state
        transform: "translateY(-4px)", // This line causes the "raise" effect on hover
        boxShadow: "lg" // Optionally, increase the shadow to enhance the effect
      }}
    >
      <Image src={imageSrc} alt={`Image for ${title}`} objectFit="cover" height="200px" width="full" />

      <Box p="6">
        <Text fontSize="xl" fontWeight="bold" color={theme.colors.brown[900]} mb="2">
          {title}
        </Text>
        <Text fontSize="md" color={theme.colors.black[700]} mb="4">
          {subtitle}
        </Text>
        <Text color={theme.colors.black[500]}>
          {excerpt}
        </Text>
        <Button as="a" href={readMoreUrl} mt="4" colorScheme="brown" size="sm">
          Read More
        </Button>
      </Box>
    </Box>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  readMoreUrl: PropTypes.string,
};

export default BlogPost;

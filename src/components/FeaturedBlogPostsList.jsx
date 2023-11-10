import { Box, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import BlogPost from '../components/BlogPost'; 
import blogImage from '../assets/blog-sample.jpg'; 

function FeaturedBlogPostsList() {
  // Mock data for blog posts
  const blogPosts = [
    {
      title: "Mastering Event Photography",
      subtitle: "Capture Memories",
      imageSrc: blogImage,
      excerpt: "Dive into the art of event photography with our expert tips. Learn how to capture the perfect moments that clients will cherish for a lifetime...",
      readMoreUrl: "/event-photography"
    },
    {
      title: "Choosing the Perfect Venue",
      subtitle: "Venue Selection",
      imageSrc: blogImage,
      excerpt: "Your guide to selecting the ideal venue for any event. Discover what to look for, questions to ask, and how to know when you've found 'the one'...",
      readMoreUrl: "/event-venue"
    },
    {
      title: "Creating Unforgettable Moments",
      subtitle: "Event Planning",
      imageSrc: blogImage,
      excerpt: "Learn how to create an unforgettable experience for your event attendees...",
      readMoreUrl: "/event-planning"
    },
    {
      title: "The Latest Trends in Event Decor",
      subtitle: "Event Design",
      imageSrc: blogImage,
      excerpt: "Stay ahead of the curve with these innovative event decor trends...",
      readMoreUrl: "/event-decor"
    }
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Featured Blog Posts
      </Heading>
      <Text textAlign="center" mb={6} fontFamily="body">
        Explore our curated articles
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mx={12} mb={10}>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            subtitle={post.subtitle}
            imageSrc={post.imageSrc}
            excerpt={post.excerpt}
            readMoreUrl={post.readMoreUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturedBlogPostsList;

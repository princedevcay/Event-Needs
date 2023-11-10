import { Text, VStack, HStack, Link, Icon, Heading } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

const VendorAboutSection = () => {
  // Example vendor details
  const vendor = {
    name: "Snapshot Photography",
    rating: 4.5,
    location: "New York, NY",
    website: "https://www.snapshot.com",
    socialMedia: {
      facebook: "https://www.facebook.com/snapshot",
      twitter: "https://twitter.com/snapshot",
      instagram: "https://instagram.com/snapshot",
    },
    description: "Snapshot Photography offers professional photography services for weddings, corporate events, family portraits, and more. With a keen eye for detail and a passion for capturing the moments that matter most, our team ensures that your memories are beautifully preserved."
  };

  return (
    <VStack align="start" spacing={4}>
      <Heading fontSize="3xl" fontWeight="bold">{vendor.name}</Heading>
      <HStack>
        {Array.from({ length: 5 }, (_, index) => (
          <Icon
            as={BsStarFill}
            key={index}
            color={index < vendor.rating ? "yellow.400" : "gray.300"}
          />
        ))}
        <Text as="span" ml={2}>({vendor.rating})</Text>
      </HStack>
      <Text>{vendor.location}</Text>
      <HStack>
        <Link href={vendor.website} isExternal>
          <Icon as={FaGlobe} w={5} h={5} />
        </Link>
        {Object.entries(vendor.socialMedia).map(([network, url]) => {
          const IconComponent = {
            facebook: FaFacebook,
            twitter: FaTwitter,
            instagram: FaInstagram,
          }[network];

          return (
            <Link href={url} isExternal key={network}>
              <Icon as={IconComponent} w={5} h={5} />
            </Link>
          );
        })}
      </HStack>
      <Text>{vendor.description}</Text>
    </VStack>
  );
};

export default VendorAboutSection;

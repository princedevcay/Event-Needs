import { useState, useEffect } from 'react';
import { getUsers } from '../../services/userService';
import { Box, List, ListItem, ListIcon, Heading, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner color="blue.500" size="xl" />;
  if (error) return <Alert status="error"><AlertIcon />Error fetching users: {error}</Alert>;

  return (
    <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md">
      <Heading mb={4}>Users</Heading>
      <List spacing={3}>
        {users.map(user => (
          <ListItem key={user._id} p={2} bg="white" borderRadius="md" boxShadow="sm">
            <ListIcon as={MdCheckCircle} color="green.500" />
            <Text fontSize="lg">{user.name}</Text>
            <Text fontSize="sm" color="gray.600">{user.email}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;

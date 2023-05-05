import React, {FC} from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'
import { removeUser } from '../slices/authSlice';
import { useSignOutMutation } from '../api/blogApi';

declare global {
  interface Window {
    localStorage: Storage;
  }
}
interface Props {
    
}
  
export const Navbar : FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { username, loggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [signOut] = useSignOutMutation();
  const dispatch = useAppDispatch();
  const logout = async () => {
    await signOut();
    dispatch(removeUser());  
  };

  return (
    <Flex     
      as="nav"    
      align="center"
      justify="space-between"  
      wrap="wrap"
      padding={6}  
      bg="teal.500"  
      color="white"  
      //{...Props}
    >
      <Flex data-testid = "navbar-test" align="center" mr={5}>    
        <Text as = {RouterLink} to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>  
            Blog Application  
          </Heading>
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>        

      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}     
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      >  
        
        { loggedIn && (  
            <Text fontSize="24px" mr={4}> {username}</Text>)
        }
        { loggedIn && (<Button as = {RouterLink} to="/blogs/new"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Create Blog
          </Button>)
        }
        { !loggedIn && 
          (<Button as = {RouterLink} to="/signin"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            LogIn or SignUp    
          </Button>)
        }  
        {
          loggedIn && (<Button onClick={logout}  
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}  
          >
            Log Out
          </Button>)
        }
      </Box>
    </Flex>
  );
}

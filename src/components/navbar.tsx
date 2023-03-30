import React, {FC} from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

interface Props {
    
}

export const Navbar : FC<Props> = () => {
  //const { isLoggedIn, login, logout, user } = useContext(AuthContext);
  const isLoggedIn = true;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

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
      <Flex align="center" mr={5}>
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
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {/* {
          user && (
            <Button
              variant="outline"
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
              {
                user.name
              }
            </Button>
          )
        } */}
        {
          isLoggedIn && (<Button as = {RouterLink} to="/blogs"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Create Blog
          </Button>)
        }
        {
          (<Button as = {RouterLink} to="/signin"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            LogIn or SignUp
          </Button>)
        }
        {/* {
          isLoggedIn && (<Button onClick={logout}
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Log Out
          </Button>)
        } */}
      </Box>
    </Flex>
  );
}

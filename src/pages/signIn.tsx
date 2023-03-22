import React, {FC} from 'react';
//import { AuthContext } from "../context/authContext";
//import { Redirect, useHistory } from "react-router-dom";
import { redirect} from "react-router-dom";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    useToast,
    FormHelperText,
    InputRightElement,
    Text
  } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
//import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
interface Props {
}

export const signIn : FC<Props> = () => {
  //const [showPassword, setShowPassword] = useState(false);
  //const HandleShowClick = () => setShowPassword(!showPassword);
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [requestState, setRequestState] = useState("not-requested");
  // const toast = useToast();
  const isLoggedIn = false;
  //const { isLoggedIn, login } = useContext(AuthContext);

  // const logIn = (e) =>{
  //     e.preventDefault();
  //     setRequestState("loading");
  //     axios.post('https://blog-application-backend101.herokuapp.com/api/v1/users/login',{email,password})
  //     .then((res) => {
  //         setRequestState("completed");
  //         login(res.data);
  //         toast({
  //             title: " You Logged in Successfully!!",
  //             duration: 4000,
  //             status: "success",
  //             isClosable: true,
  //         })
  //     }).catch((err) => {
  //         setRequestState("error");
  //     })
  // }

  const logIn = () => {
    console.log('lognin')
  }
  if (isLoggedIn){
      return (
        <div>
          <h1>you are already logged in</h1>
        </div>
      )
  }
  else
      return (
          <Flex
              flexDirection="column"
              width="100wh"
              height="100vh"
              backgroundColor="gray.200"
              justifyContent="center"
              alignItems="center"
          >
              <Stack
                  flexDir="column"
                  mb="2"
                  justifyContent="center"
                  alignItems="center"
              >
                  <Avatar bg="teal.500" />
                  <Heading color="teal.400">Welcome!</Heading>
                  <Box minW={{ base: "90%", md: "468px" }}>
                      <form onSubmit={logIn}>
                          <Stack
                              spacing={4}
                              p="1rem"
                              backgroundColor="whiteAlpha.900"
                              boxShadow="md"
                          >
                              <FormControl>
                                  <InputGroup>
                                      <InputLeftElement
                                          pointerEvents="none"
                                          children={<CFaUserAlt color="gray.300" />}
                                      />
                                      <Input type="text"
                                          placeholder="Email"
                                          name="email"
                                          //onChange={(e) => setEmail(e.target.value)}
                                          required
                                      />
                                  </InputGroup>
                              </FormControl>
                              <FormControl>
                                  <InputGroup>
                                      <InputLeftElement
                                          pointerEvents="none"
                                          color="gray.300"
                                          children={<CFaLock color="gray.300" />}
                                      />
                                      <Input
                                          //type={showPassword ? "text" : "password"}
                                          placeholder="Password"
                                          name="password"
                                          //onChange={(e) => setPassword(e.target.value)}
                                          required
                                      />
                                      {/* <InputRightElement width="4.5rem">
                                          <Button h="1.75rem" size="sm" onClick={HandleShowClick}>
                                          {showPassword ? "Hide" : "Show"}
                                          </Button>
                                      </InputRightElement> */}
                                  </InputGroup>
                              </FormControl>
                              {/* {
                                  requestState === "error" && (
                                  <Text display="block" fontSize="sm" color="red">
                                  Wrong Email or Password!!!
                                  </Text>
                              )} */}
                              <Button
                                  borderRadius={0}
                                  type="submit"
                                  variant="solid"
                                  colorScheme="teal"
                                  width="full"
                              >
                                  Login
                              </Button>
                          </Stack>
                      </form>
                  </Box>
              </Stack>
              <Box>
                  New to us?{" "}
                  <Link color="teal.500" href="/signup">
                  Sign Up
                  </Link>
              </Box>
          </Flex> 
  );
}

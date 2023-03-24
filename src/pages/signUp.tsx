import React, {FC} from 'react';
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
  Text,
  Spinner
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
//import axios from "axios";
//import { Redirect, useHistory } from "react-router-dom";
//import { AuthContext } from "../context/authContext";
import { Link as RouterLink } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

interface Props {
}

export const SignUp : FC<Props> = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowClick = () => setShowPassword(!showPassword);
  // const [email, setEmail] = useState();
  // //const { isLoggedIn, login } = useContext(AuthContext);
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  // const [passwordConfirm, setpasswordConfirm] = useState();
  // const [requestState, setRequestState] = useState("not-requested");
  // const [error,setError] = useState([]);
  // const [nameError, setNameError] = useState(null);
  // const [passwordError, setPasswordError] = useState(null);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  // const [userUniqueError,setUserUniqueError] = useState(null);
  // const toast = useToast(); 

  const isLoggedIn = false;

  // const signUp = (e) => {
  //     e.preventDefault();
  //     setRequestState("loading");
  //     axios.post('https://blog-application-backend101.herokuapp.com/api/v1/users/signup', {name,email,password,passwordConfirm})
  //     .then((res) => {
  //         setRequestState("completed");
  //         toast({
  //             title: "You Successfully Create your Account!! Please Login to Continue!!",
  //             duration: 4000,
  //             status: "success",
  //             isClosable: true,
  //         });
  //     }).catch((err) => {
  //         // if(err.response.data.errors){
  //         //     setError(err.response.data.errors[0]);
  //         // }
  //         setNameError(null); 
  //         setPasswordError(null);
  //         setConfirmPasswordError(null);
  //         setUserUniqueError(null)
  //         if(err.response.data.errors){
  //             for(let i=0;i<err.response.data.errors.length;i++){
  //                 if(err.response.data.errors[i].split(' ')[0] == 'User'){setNameError(err.response.data.errors[i]);}
  //                 if(err.response.data.errors[i].split(' ')[0] == 'Password'){setPasswordError(err.response.data.errors[i]);}
  //             }
  //         }
  //         else if(err.response.data.message.message){
  //             setConfirmPasswordError(err.response.data.message.errors.passwordConfirm.message);
  //         }          
  //         else{
  //             setUserUniqueError("User name already exists")
  //         }
  //         setRequestState("error");
  //     })
  // }

  const signUp = () => {
    console.log("sign Up")
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
              <Heading color="teal.400">Welcome</Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                  <form onSubmit={signUp}>
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
                                  <Input data-testid = "test-name"
                                      placeholder="Name"
                                      type="text"
                                      name="name"
                                      //onChange={(e) => setName(e.target.value)}
                                      required
                                      autoFocus
                                  />
                              </InputGroup>
                          </FormControl>
                          {/* {
                              nameError !== null && (<Text display="block" fontSize="sm" color="red">
                              {nameError}
                              </Text>)
                          }
                          {
                              userUniqueError !== null && (<Text display="block" fontSize="sm" color="red">
                              {userUniqueError}
                              </Text>)
                          } */}
                          <FormControl>
                              <InputGroup>
                                  <InputLeftElement
                                      pointerEvents="none"
                                      children={<CFaUserAlt color="gray.300" />}
                                  />
                                  <Input data-testid = "test-email"
                                      placeholder="Email"
                                      type="email"
                                      //m={1}
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
                                  <Input  data-testid = "test-password"
                                      //type={showPassword ? "text" : "password"}
                                      placeholder="Password"
                                      name="password"
                                      //onChange={(e) => setPassword(e.target.value)}
                                      required
                                  />
                                  {/* <InputRightElement width="4.5rem">
                                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                      {showPassword ? "Hide" : "Show"}
                                      </Button>
                                  </InputRightElement> */}
                              </InputGroup>
                          </FormControl>
                          {/* {
                              passwordError !== null && (<Text display="block" fontSize="sm" color="red">
                              {passwordError}
                              </Text>)
                          } */}
                          <FormControl>
                              <InputGroup>
                                  <InputLeftElement
                                      pointerEvents="none"
                                      color="gray.300"
                                      children={<CFaLock color="gray.300" />}
                                  />
                                  <Input data-testid = "test-confirmPassword"
                                      //type={showPassword ? "text" : "password"}
                                      placeholder="Confirm Password"
                                      name="passwordConfirm"
                                      //onChange={(e) => setpasswordConfirm(e.target.value)}
                                      required
                                  />
                                  {/* <InputRightElement width="4.5rem">
                                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                      {showPassword ? "Hide" : "Show"}
                                      </Button>
                                  </InputRightElement> */}
                              </InputGroup>
                          </FormControl>
                          {/* {
                              confirmPasswordError !== null && (<Text display="block" fontSize="sm" color="red">
                              {confirmPasswordError}
                              </Text>)
                          } */}
                          {/* {
                              requestState === "error" && (
                              <Text display="block" fontSize="sm" color="red">
                              Internal server error
                              </Text>
                          )} */}
                          {/* {
                              requestState === "completed" && (<Redirect to="/login" />)
                          } */}
                          <Button
                              borderRadius={0}
                              type="submit"
                              variant="solid"
                              colorScheme="teal"
                              width="full"
                              //disabled={requestState === "loading" ? 1 : 0}
                          >
                         {/* {requestState === "loading" && <Spinner mr={3} />} */}
                           SignUp
                          </Button>
                      </Stack>
                  </form>
              </Box>
          </Stack>
      </Flex>
  );
}

import React, {FC} from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputRightElement,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    useToast,
    Text,
    Spinner
  } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';
import { useSignInMutation } from '../api/blogApi';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
interface Props {
    
}

export const SignIn : FC<Props> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const HandleShowClick = () => setShowPassword(!showPassword);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {loggedIn} = useAppSelector(
    (state: RootState) => state.auth
  );
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, {isLoading, isError}] = useSignInMutation();

  const logIn = async (e : any) => {
    e.preventDefault();
    try {
        await signIn({ name, password })
          .unwrap()
          .then((data) => {
            dispatch(
              setUser({
                username:name,
                loggedIn: true,
                access_token: data?.accessToken,
                refresh_token: data?.refToken,
              })
            );
            toast({
                title: " You Logged in Successfully!!",
                duration: 4000,
                status: "success",
                isClosable: true,
            })
            navigate("/");
          });
      } catch (err: any) {
        console.log(err);
      }
      console.log("log")
  }
  if (loggedIn){
      return (
        <div>
          <h1>you are already logged in</h1>
        </div>
    )
}
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
                  <form onSubmit={(e:any)=>logIn(e)}>
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
                                  <Input data-testid = "test-email" type="text"
                                      placeholder="User Name"
                                      name="name"
                                      onChange={(e) => setName(e.target.value)}
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
                                  <Input data-testid = "test-password"
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Password"
                                      name="password"
                                      onChange={(e) => setPassword(e.target.value)}
                                      required
                                  />
                                  <InputRightElement width="4.5rem">
                                      <Button h="1.75rem" size="sm" onClick={HandleShowClick}>
                                      {showPassword ? "Hide" : "Show"}
                                      </Button>
                                  </InputRightElement>
                              </InputGroup>
                          </FormControl>
                          {
                              isError && (
                              <Text display="block" fontSize="sm" color="red">
                              Wrong Email or Password!!!
                              </Text>
                          )}
                          <Button
                              borderRadius={0}
                              type="submit"
                              variant="solid"
                              colorScheme="teal"
                              width="full"
                          >
                            {isLoading && <Spinner mr={3} />}
                              Login
                          </Button>
                      </Stack>
                  </form>
              </Box>
          </Stack>
          <Box>
              New to us?{" "}
              <Link as = {RouterLink} to =  "/signup" data-testid = "test-signUp" color="teal.500">
              Sign Up
              </Link>
          </Box>
        </Flex> 
    );
}

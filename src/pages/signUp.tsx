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
  Avatar,
  FormControl,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { userAdded } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

interface Props {  
}

export const SignUp : FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [requestState, setRequestState] = useState("not-requested");
  const data = useAppSelector((state: RootState) => state.users);
  const isLoggedIn = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newID = data.user.length;

  const signUp = (e : any) => {
    e.preventDefault();  
    setRequestState("completed");  
    if (name && email && password && passwordConfirm) {  
      dispatch(  
        userAdded({  
          id: newID,
          name,
          email,    
          password,
          passwordConfirm 
        })    
      )  
      setName('');
      setEmail('');
      setPassword('');
      setpasswordConfirm('');
      navigate('/signin');  
    } 
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
                                      onChange={(e) => setName(e.target.value)}
                                      required
                                      autoFocus
                                  />
                              </InputGroup>
                          </FormControl>
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
                                      onChange={(e) => setEmail(e.target.value)}
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
                                      placeholder="Password"
                                      name="password"
                                      onChange={(e) => setPassword(e.target.value)}
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
                                  <Input data-testid = "test-confirmPassword"
                                      placeholder="Confirm Password"  
                                      name="passwordConfirm"
                                      onChange={(e) => setpasswordConfirm(e.target.value)}
                                      required
                                  />
                              </InputGroup>
                          </FormControl>
                          <Button
                              borderRadius={0}
                              type="submit"  
                              variant="solid"
                              colorScheme="teal"
                              width="full"
                              //disabled={requestState === "loading" ? 1 : 0}
                          >
                           SignUp
                          </Button>
                      </Stack>
                  </form>
              </Box>
          </Stack>
      </Flex>
  );  
}

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
  useToast,
  Text,
  Spinner
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { userAdded } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'
import { useSignUpMutation } from '../api/blogApi';

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
  const toast = useToast(); 
  const [signup, { isLoading }] = useSignUpMutation();
  const {username,loggedIn, access_token } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [error,setError] = useState([]);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [userUniqueError,setUserUniqueError] = useState('');

  const signUp = async (e : any) => {
    e.preventDefault();  
    setRequestState("completed");  
    if (name && email && password && passwordConfirm) {  
        await signup({
            name,
            email,
            password,
            passwordConfirm
          }).unwrap() .then(() => {
            toast({
                title: "You Successfully Create your Account!! Please Login to Continue!!",
                duration: 4000,
                status: "success",
                isClosable: true,
            });
            navigate("/signin");
        }).catch(err => {
            setNameError(''); 
            setPasswordError(null);
            setConfirmPasswordError(null);
            setUserUniqueError('')
            if(err.data && err.data.message && err.data.message.errors && err.data.message.errors.passwordConfirm && err.data.message.errors.passwordConfirm.message){
                setConfirmPasswordError(err.data.message.errors.passwordConfirm.message);
            }
            else if(err.data && err.data.errors && err.data.errors[0]){
                setPasswordError(err.data.errors[0]);
            }
            else if(err.data && err.data.message && err.data.message.keyValue && err.data.message.keyValue.name){
                setNameError("User name already exists")
            }
            else if(err.data && err.data.message && err.data.message.keyValue && err.data.message.keyValue.email){
                setUserUniqueError("User email already exists")
            }
            setRequestState("error");
        }) 
    } 
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
                            {
                                nameError !== null && (<Text display="block" fontSize="sm" color="red">  
                                {nameError}
                                </Text>)    
                            }
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
                            {
                                userUniqueError !== null && (<Text display="block" fontSize="sm" color="red">  
                                {userUniqueError}
                                </Text>)
                            }
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
                            {
                                passwordError !== null && (<Text display="block" fontSize="sm" color="red">
                                {passwordError}
                                </Text>)
                            }
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
                            {
                                confirmPasswordError !== null && (<Text display="block" fontSize="sm" color="red">
                                {confirmPasswordError}
                                </Text>)
                            }
                          <Button
                              borderRadius={0}
                              type="submit"  
                              variant="solid"
                              colorScheme="teal"
                              width="full"
                              //disabled={requestState === "loading" ? 1 : 0}
                          >
                            {isLoading && <Spinner mr={3} />}
                           SignUp  
                          </Button>
                      </Stack>
                  </form>
              </Box>
          </Stack>
      </Flex>
  );  
}

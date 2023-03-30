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
  Spinner,
  Textarea
}from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from '../slices/blogSlice';
import { Link as RouterLink } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

interface Props {

}

export const CreateBlogDetails : FC<Props> = () => {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');

  const [requestState, setRequestState] = useState("completed");
  const [error,setError] = useState();
  const toast = useToast(); 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const createBlog = (e : any) => {
      e.preventDefault();
      setRequestState("completed");
      if (name && description) {
        dispatch(
          postAdded({
            id: nanoid(),
            name,
            description,
            creator: 'admin'
          })
        )
        setName('')
        setDescription('')
        navigate('/');
      }
  }
  return (
      <form onSubmit={createBlog}>
          <Stack
          spacing={4}
          p="5rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          >
              <Textarea
                  rows = {3}
                  placeholder="Blog Title"
                  variant="filled"
                  name = "name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  size="lg"
              />
              <Textarea
                  rows = {10}
                  placeholder="Blog Description"
                  variant="outline"
                  name= "description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  size="lg"
              />
              {
                  requestState === "error" && (
                  <Text display="block" fontSize="sm" color="red">
                  {error}
                  </Text>
              )}
              {/* {
                  requestState === "completed" &&  navigate('/')
              } */}
              <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
              >
                  SUBMIT
              </Button>
          </Stack>
      </form>
  )
}

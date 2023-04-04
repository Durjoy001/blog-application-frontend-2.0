import React, {FC} from 'react';
import {
  Button,
  Stack,
  useToast,
  Text,
  Textarea
}from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { postAdded } from '../slices/blogSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';

interface Props {

}

export const CreateBlogDetails : FC<Props> = () => {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const data = useAppSelector((state: RootState) => state.blogs);
  const [requestState, setRequestState] = useState("completed");
  const [error,setError] = useState();
  const toast = useToast(); 
  const auth = useAppSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newID = data.length;

  const createBlog = (e : any) => {  
      e.preventDefault();
      setRequestState("completed");  
      if (name && description) {  
        dispatch(
          postAdded({  
            id: newID,
            name,
            description,    
            creator: auth.authName 
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

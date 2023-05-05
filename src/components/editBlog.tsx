import React, {FC, useEffect} from 'react';
import {
  Button,
  Stack,
  useToast,
  Text,
  Textarea,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks'
import { useUpdateBlogMutation } from '../api/blogApi';
import { useGetBlogQuery } from '../api/blogApi';

interface Props {

}
export const EditBlog : FC<Props> = () => {
  const  {id}  = useParams();
  const toast = useToast(); 
  const navigate = useNavigate();
  const {data} = useGetBlogQuery(id);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [updateBlog, {isLoading}] = useUpdateBlogMutation();
  const [blogError,setBlogError] = useState('');
  const { username,loggedIn,access_token } = useAppSelector(
    (state: RootState) => state.auth
  );
  useEffect (() => {
    setDescription(data?.description);  
    setName(data?.name)
  },[data])

  const updateblog = async (e : any) =>{
    e.preventDefault()
    const request = {id,name,description,access_token}
      try {
        await updateBlog(request).unwrap();
        toast({
          title: "Blog successfully updated!!",
          duration: 4000,
          status: "success",
          isClosable: true,
        });
        navigate(`/blogs/view/${id}`);
      } catch (error : any) {
        setBlogError(error.data.errors[0]);
        console.log(error.data.errors[0]);
      }
  }
  if (!data) {
    return <h1>Blog not found</h1>;
  }  
  if(!loggedIn || username !== data.creator){
    return (<h1>You don't have permission</h1>)
  }
  return (
      <form onSubmit={updateblog}>    
          <Stack  
              spacing={4}  
              p="5rem"  
              backgroundColor="whiteAlpha.900"    
              boxShadow="md"    
          > 
              <Textarea   
                  rows={3}    
                  variant="outline"  
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  size="lg"
              />
              <Textarea
                  rows={10}
                  value = {description}  
                  variant="outline"
                  name= "description"
                  onChange={(e) => setDescription(e.target.value)}
                  size="lg"
              />
              {
                  blogError !== null && (
                  <Text display="block" fontSize="sm" color="red">
                  {blogError}
                  </Text>
              )}
              <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
              >
                {isLoading && <Spinner mr={2} />}
                UPDATE
              </Button>
          </Stack>
      </form>
  )
} 

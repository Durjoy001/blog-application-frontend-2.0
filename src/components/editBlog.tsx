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
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { postUpdated } from './../slices/blogSlice';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
interface Props {

}

export const EditBlog : FC<Props> = () => {
  const [loaded,setLoaded] = useState(true);
  const  id  = useParams().id;
  const [blogs, setBlogs] = useState([]);
  const [author,setAuthor] = useState("admin");
  const [requestState, setRequestState] = useState("not-requested");
  const [error,setError] = useState();
  const toast = useToast(); 
  const navigate = useNavigate();

  const isLoggedIn = true;
  const user = "admin";

  const data = useAppSelector((state: RootState) => state.blogs);
  var blogID: number = Number(id);
  const Blog = data[blogID]

  const [name,setName] = useState(Blog.name);
  const [description,setDescription] = useState(Blog.description);
  const dispatch = useDispatch()

  const updateBlog = (e : any) =>{
    if (name && description) {
      dispatch(postUpdated({ id: blogID, name, description }))
      navigate('/blogs/view/' + id )
    }
  }
  if(!loaded){
      return <h1>loading...</h1>
  }
  else {
      if(!isLoggedIn || author !== user){
          //return <Redirect to={'/blogs/view/' + id }/>
          return (<h1>don't have permission</h1>)
      }
      else{
          return (
              <form onSubmit={updateBlog}>  
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
                          requestState === "error" && (
                          <Text display="block" fontSize="sm" color="red">
                          {error}
                          </Text>
                      )}
                      {/* {
                          requestState === "completed" && (<Redirect to={'/blogs/view/' + id }/>)
                      } */}
                      <Button
                          borderRadius={0}
                          type="submit"
                          variant="solid"
                          colorScheme="teal"
                          width="full"
                      >
                      UPDATE
                      </Button>
                  </Stack>
              </form>
          )
      } 
  }   
}

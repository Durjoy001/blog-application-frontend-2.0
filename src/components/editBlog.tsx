import React, {FC} from 'react';
import {
  Button,
  Stack,
  useToast,
  Text,
  Textarea
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { postUpdated } from './../slices/blogSlice';

interface Props {

}
export const EditBlog : FC<Props> = () => {
  const [loaded,setLoaded] = useState(true);
  const  id  = useParams().id;
  const [requestState, setRequestState] = useState("not-requested");
  const [error,setError] = useState();
  const toast = useToast(); 
  const navigate = useNavigate();
  const data = useAppSelector((state: RootState) => state.blogs);
  var blogID: number = Number(id);
  const Blog = data[blogID]
  const auth = useAppSelector((state: RootState) => state.users);
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
      if(!auth.isAuthenticated || auth.authName !== Blog.creator){
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

import React, {FC, useEffect} from 'react';
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
import { useUpdateBlogMutation } from '../api/blogApi';
import { useGetBlogQuery } from '../api/blogApi';
import { useGenerateAccessTokenMutation } from '../api/blogApi';
import { setNewAccessToken, setUser } from '../slices/authSlice';


interface Props {

}
interface data {
  id : string,  
  name : string,
  description: string,
  creator : string
}
export const EditBlog : FC<Props> = () => {
  const [loaded,setLoaded] = useState(true);
  const  {id}  = useParams();
  const [requestState, setRequestState] = useState("not-requested");
  const [error,setError] = useState();
  const toast = useToast(); 
  const navigate = useNavigate();
  const {data,isLoading} = useGetBlogQuery(id);
  console.log(data)
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const dispatch = useDispatch()
  const [updateBlog] = useUpdateBlogMutation();
  const [generateAccessToken] = useGenerateAccessTokenMutation();
  const { username,loggedIn,access_token } = useAppSelector(
    (state: RootState) => state.auth
  );
  useEffect (() => {
    setDescription(data?.description);  
    setName(data?.name)
  },[data])

  const updateblog = async (e : any) =>{
    e.preventDefault()
    console.log(id)
    const request = {id,name,description,access_token}
      try {
        await updateBlog(request).unwrap();
        navigate(`/blogs/view/${id}`);
      } catch (error : any) {
        if (error.originalStatus === 500 || error.originalStatus === 401) {
          const userRefreshToken = localStorage.getItem('refresh_token');
          const response = await generateAccessToken(userRefreshToken).unwrap()
          dispatch(setNewAccessToken({
              access_token: response?.newAccessToken,
          }))
          let request = {
              id,name,description,access_token: response?.newAccessToken,
          }
          try {
            await updateBlog(request).unwrap();
            navigate(`/blogs/view/${id}`);
          } catch (error) {
  
          }
        }
      }
  }
  if(isLoading){
      return <h1>loading...</h1>
  }
  else if (!data) {
    return <h1>Blog not found</h1>;
  }
  else {
      if(!loggedIn || username !== data.creator){
          //return <Redirect to={'/blogs/view/' + id }/>  
          return (<h1>don't have permission</h1>)
      }
      else{
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

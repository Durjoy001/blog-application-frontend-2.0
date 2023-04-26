import React, {FC} from 'react';
import {
  Box,
  Text,
  Button,
  Stack,
  Container,
  SimpleGrid,
  ChakraProvider,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { postDeleted } from './../slices/blogSlice';
import { useDeleteBlogMutation } from '../api/blogApi';
import { useGenerateAccessTokenMutation } from '../api/blogApi';
import { setNewAccessToken, setUser } from '../slices/authSlice';

interface Props {
  id : string,  
  name : string,
  description: string,
  creator : string
}

export const BlogDetails : FC<Props> = ({id, name , description , creator}) => {
  const [requestState, setRequestState] = useState("not-requested");
  const toast = useToast(); 
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const [generateAccessToken] = useGenerateAccessTokenMutation();
  //const auth = useAppSelector((state: RootState) => state.users);
  const { username, loggedIn , access_token } = useAppSelector(
    (state: RootState) => state.auth
  );
  const cancelRef = React.useRef<null | HTMLButtonElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const [deleteblog] = useDeleteBlogMutation();

  const deleteBlog = async (e : any) =>{
    e.preventDefault();    
    const request = {id, access_token}
    try {
      await deleteblog(request).unwrap()
      navigate("/");
    } catch (error: any) {
      if (error.originalStatus === 500 || error.originalStatus === 401) {
        const userRefreshToken = localStorage.getItem('refresh_token');
        const response = await generateAccessToken(userRefreshToken).unwrap()
        dispatch(setNewAccessToken({
            access_token: response?.newAccessToken,
        }))
        let request = {
            id,
            access_token: response?.newAccessToken,
        }
        try {
          await deleteblog(request).unwrap()
          navigate("/");
        } catch (error) {

        }
      }
    }
  }  
return (
    <ChakraProvider>      
      <Container maxW="80rem" centerContent>        
        <SimpleGrid columns={[1, 1, 1, 1]}>                
            <Box     
              p={4}    
              w="1000px"  
              display={{ md: "flex" }}  
              //maxWidth="62rem"  
              borderWidth={1}
              margin={2}  
              padding="2rem"  
            >
              <Stack  
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="teal.600"  
                >
                  {name}
                </Text>
                <Text
                  my={1}
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                >
                  {description}
                </Text>

                <Text my={2} color="gray.500">
                  {"Author: " + creator}
                </Text>
                {/* <Text my={2} color="gray.500">
                  {"Created at: " + blogs.time}
                </Text> */}
                  {
                    loggedIn && username === creator &&  (<Button as = {RouterLink} to= {`/blogs/${id}`}
                        w="920px"
                        variant="outline"
                        _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                      >
                      Update
                    </Button>)
                  }
                  {
                    loggedIn && username === creator  &&(<><Button colorScheme="red" w="920px" variant="outline"
                      _hover={{ bg: "red.200", borderColor: "red.200" }} onClick={() => setIsOpen(true)}>
                      Delete  
                    </Button>         
              
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}  
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete
                          </AlertDialogHeader>
              
                          <AlertDialogBody>
                            Are you sure to delete this blog? You can't undo this action afterwards.
                          </AlertDialogBody>
              
                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button colorScheme="red" onClick={deleteBlog} ml={3}>
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                   </>)
                  }
              </Stack>
           </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
 );
}

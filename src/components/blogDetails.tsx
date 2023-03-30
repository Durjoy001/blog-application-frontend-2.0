import React, {FC} from 'react';
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Collapse,
  Container,
  Spacer,
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
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
//import { Redirect, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

interface Props {
  id : string,
  name : string,
  description: string,
  creator : string
}

export const BlogDetails : FC<Props> = ({id, name , description , creator}) => {
  //const { id } = useParams();
  //const [blogs, setBlogs] = useState([]);
  const [requestState, setRequestState] = useState("not-requested");
  const toast = useToast(); 
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  //const cancelRef = React.useRef()
  const isLoggedIn  = true;
  //const blogs = useAppSelector((state: RootState) => state.blogs);

  const cancelRef = React.useRef<null | HTMLButtonElement>(null);

  const navigate = useNavigate();


  const deleteBlog = (e : any) =>{
    e.preventDefault();
    setRequestState("completed");
    console.log("deleted")
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
                    isLoggedIn && (<Button as = {RouterLink} to= {`/blogs/${id}`}
                        w="920px"
                        variant="outline"
                        _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                      >
                      Update
                    </Button>)
                  }
                  {/* {
                    requestState === "error" && (
                      <Text display="block" fontSize="sm" color="red">
                        Something Went Wrong!! Please Try Again.
                      </Text>
                    )
                  } */}
                  {/* {
                      requestState === "completed" && (<Redirect to='/'/>)
                  } */}
                  {
                    isLoggedIn  &&(<><Button colorScheme="red" w="920px" variant="outline"
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

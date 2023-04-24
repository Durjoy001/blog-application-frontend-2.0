import React, {FC} from 'react';
import { BlogCardList } from '../components/blogCardList';
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { useGetBlogsQuery } from '../api/blogApi';
interface Props {
  
}

interface blog {
  id : string,
  name : string,
  description: string,
  creator : string,
  time : string
}

export const Blogs : FC<Props> = () => {
  const blogs = useAppSelector((state: RootState) => state.blogs);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBlogsQuery();
  
  return (
    <div data-testid = "home-page-test">  
    <ChakraProvider>
      <Container maxW="80rem" centerContent>    
        <SimpleGrid columns={[1, 1, 1, 1]}>
           <BlogCardList Blogs = {data} />
        </SimpleGrid>  
      </Container>  
    </ChakraProvider>   
    </div>
  );
}

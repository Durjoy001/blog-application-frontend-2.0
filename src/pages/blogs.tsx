import React, {FC} from 'react';
import { BlogCardList } from '../components/blogCardList';
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import { useGetBlogsQuery } from '../api/blogApi';
interface Props {
  
}

export const Blogs : FC<Props> = () => {
  const { data } = useGetBlogsQuery();

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

import React, {FC} from 'react';
import { BlogCard } from './blogCard';
import { Center, Box, Heading } from "@chakra-ui/react";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";

interface blog {
  id : string,
  name : string,
  description: string,
  creator : string
}

interface Props {
  Blogs : blog[]
} 

export const BlogCardList : FC<Props> = ({Blogs}) => {
  return (
    <ChakraProvider>
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[1, 1, 1, 1]}>
         {Blogs.map((blog) => (
             <BlogCard {...blog} /> 
         ))}
      </SimpleGrid>
    </Container>
  </ChakraProvider>
  );
}

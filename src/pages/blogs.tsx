import React, {FC} from 'react';
import blogs from './../data.json'
import { BlogCardList } from '../components/blogCardList';
import { BlogCard } from '../components/blogCard';
import { Center, Box, Heading } from "@chakra-ui/react";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
interface Props {
  
}

export const Blogs : FC<Props> = () => {
  return (
    <div data-testid = "home-page-test">
    <ChakraProvider>
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[1, 1, 1, 1]}>
         <BlogCardList Blogs = {blogs} />
      </SimpleGrid>
    </Container>
  </ChakraProvider>
  </div>
  );
}

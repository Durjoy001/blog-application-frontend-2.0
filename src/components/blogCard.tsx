import React, {FC} from 'react';
import {
  Box,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
interface Props {
  id : string,
  name : string,
  description: string,
  creator : string,
  time : string
}

export const BlogCard : FC<Props> = ({id, name , description , creator, time}) => {

  return (
    <div data-testid = "test-blog-card">
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="62rem"
      borderWidth={1}
      margin={2}
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
        <Text my={2} color="gray.500">
          {"Author: " + creator}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
        >
            {description.substring(0, 200)+"...."}
        </Text>
        <Text my={2} color="gray.500">
          {"Created at: " +time}
        </Text>
        <Button as = {RouterLink} to= {`/blogs/view/${id}`}  data-testid = "button-test" maxWidth="100px" my={2} align-right>
          Show More
        </Button>  
      </Stack>
   </Box>
   </div>
);
}

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
  Spacer
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
//import BlogExpander from "./blogExpander";
interface Props {
  id : string,
  name : string,
  description: string,
  creator : string
}

export const BlogCard : FC<Props> = ({id, name , description , creator}) => {
  //const { id,name, description, creator ,time} = props;
  // const [show, setShow] = React.useState(false);
  // const handleToggle = () => setShow(!show);
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
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
        >
            {description.substring(0, 200)+"...."}
        </Text>

        <Text my={2} color="gray.500">
          {"Author: " + creator}
        </Text>
        {/* <Text my={2} color="gray.500">
          {"Created at: " +time}
        </Text> */}
        <Button data-testid = "button-test" maxWidth="100px" my={2} align-right>
          <a href ={'/blogs/view/' + id }> Show More</a> 
        </Button>
      </Stack>
  </Box>
  </div>
);
}

import {Blogs} from '../pages/blogs';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
//import blogData from './../data.json';
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from '../components/navbar';

describe('home page test', () => {
    test('renders blog title and content', () => {
        const name = 'Chakra Ui react js';
        render(<Blogs/>);
        const titleElement = screen.getByText(name);
        expect(titleElement).toBeInTheDocument();
      }); 
      
      test("renders blogs inside a container", () => {
        render(
          <ChakraProvider>
            <Blogs />
          </ChakraProvider>
        );
    
        const container = screen.getByTestId("home-page-test");
        expect(container).toBeInTheDocument();
      });
})
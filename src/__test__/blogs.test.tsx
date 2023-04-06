import {Blogs} from '../pages/blogs';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
//import blogData from './../data.json';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('home page test', () => {
    test('renders blog title and content', () => {
        const name = 'Chakra Ui react js';
        render(
          <MemoryRouter>
            <Provider store={store}>
              <Blogs />
            </Provider>
          </MemoryRouter>)

        const titleElement = screen.getByText(name);
        expect(titleElement).toBeInTheDocument();
      }); 
      
      test("renders blogs inside a container", () => {
        render(
          <MemoryRouter>
            <Provider store={store}>
              <Blogs />
            </Provider>
          </MemoryRouter>)
    
        const container = screen.getByTestId("home-page-test");
        expect(container).toBeInTheDocument();
      });
})
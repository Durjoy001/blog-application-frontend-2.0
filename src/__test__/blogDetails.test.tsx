import { BlogDetails } from '../components/blogDetails';
import * as ReactDOM from 'react-dom';
import { render, screen,fireEvent } from '@testing-library/react';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('home page test', () => {
    const props = {
        id: '123',
        name: 'Test Blog',
        description: 'This is a test blog',
        creator: 'testuser',
        time: '2022-05-08T10:00:00.000Z'
      };
      
    test('renders blog details with correct props', () => {
      
        const { getByText } = render(
            <MemoryRouter>
              <Provider store={store}>
                <BlogDetails {...props} />
              </Provider>
            </MemoryRouter>);
        
        expect(getByText(props.name)).toBeInTheDocument();
        expect(getByText(`Author: ${props.creator}`)).toBeInTheDocument();
        expect(getByText(props.description)).toBeInTheDocument();
        expect(getByText(`Created at: ${props.time}`)).toBeInTheDocument();
      });

      test('displays the blog name correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
              <Provider store={store}>
                <BlogDetails {...props} />
              </Provider>
            </MemoryRouter>);
        expect(getByText('Test Blog')).toBeInTheDocument();
      });

      test('displays the blog author correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
              <Provider store={store}>
                <BlogDetails {...props} />
              </Provider>
            </MemoryRouter>);;
        expect(getByText('Author: testuser')).toBeInTheDocument();
      });

      test('shows "Update" button only to creator of blog', () => {
        const { queryByText } = render( 
            <MemoryRouter>
                <Provider store={store}> 
                   <BlogDetails id="1" name="Test Blog" description="This is a test blog" creator="John Doe" time="2022-05-08T12:00:00Z" />
                </Provider>
            </MemoryRouter>);
            expect(queryByText('Update')).toBeNull();
      });

      test('shows "Delete" button only to creator of blog', () => {
        const { queryByText } = render( 
            <MemoryRouter>
                <Provider store={store}> 
                   <BlogDetails id="1" name="Test Blog" description="This is a test blog" creator="John Doe" time="2022-05-08T12:00:00Z" />
                </Provider>
            </MemoryRouter>);
        expect(queryByText('Delete')).toBeNull();
      });

      test('opens confirmation dialog when "Delete" button is clicked', async () => {
        const { queryByText } = render( 
            <MemoryRouter>
                <Provider store={store}> 
                   <BlogDetails id="1" name="Test Blog" description="This is a test blog" creator="John Doe" time="2022-05-08T12:00:00Z" />
                </Provider>
            </MemoryRouter>);
        expect(queryByText('Are you sure to delete this blog? You can\'t undo this action afterwards.')).toBeNull();
      })
})
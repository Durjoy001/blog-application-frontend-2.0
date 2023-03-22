import {Blogs} from '../pages/blogs';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


describe('home page test', () => {
    test('renders blog title and content', () => {
        const name = 'Chakra Ui react js';
        //const blogContent = 'blog4';
        render(<Blogs/>);
    
        const titleElement = screen.getByText(name);
        //const contentElement = screen.getByText(blogContent);
    
        expect(titleElement).toBeInTheDocument();
        //expect(contentElement).toBeInTheDocument();
      });

      // test('renders list of blog', () => {
      //   const blogData = [
      //     { id: 1, name: 'This is 1st blog', description: 'blog1' , creator : 'user1'},
      //     { id: 2, name: 'This is 2nd blog', description: 'blog2' , creator : 'user2'},
      //     { id: 3, name: 'This is 3rd blog', description: 'blog3' , creator : 'user3'},
      //   ];
      //   render(<Blogs/>);
      //   const blogTitleElements = screen.getAllByRole('heading', { level: 2, name: /This .* blog/i });
      //   expect(blogTitleElements).toHaveLength(blogData.length);
      //   blogTitleElements.forEach((element, index) => {
      //     expect(element).toHaveTextContent(blogData[index].name);
      //   });
      // });

      test('renders an h1 tag', () => {
        const { getByText } = render(<Blogs />);
        const h2Element = getByText(/This is 1st blog/i);
        expect(h2Element.tagName).toBe('H2');
      });

      test('total number of h1 and h2 tag', () => {
        const { getAllByRole } = render(<Blogs />);
        const h1Elements = getAllByRole('heading', { level: 1 });
        const h2Elements = getAllByRole('heading', {level: 2});
        expect(h1Elements).toHaveLength(3);
        expect(h2Elements).toHaveLength(9);
      });
})
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { BlogCardList } from '../components/blogCardList';
import React from 'react';

describe('home page test', () => {

    test('renders blog title and content', () => {
        const blogs = [
            {
              id: "1",
              name: "My First Blog Post",
              description: "<p>This is my first blog post. Welcome to my blog!</p>",
              creator: "John Doe",
            },
            {
              id: "2",
              name: "My Second Blog Post",
              description: "<p>This is my second blog post. Thanks for reading!</p>",
              creator: "Jane Smith",
            },
          ];
          render(<BlogCardList Blogs = {blogs} />);
          const postList = screen.getByTestId("test");
          expect(postList).toBeInTheDocument();
          for (let i = 0; i < blogs.length; i++) {
            const blog = blogs[i];
            const postTitle = screen.getByText(blog.name);
            expect(postTitle).toBeInTheDocument();
          }
      });
})
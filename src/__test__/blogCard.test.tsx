import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BlogCard } from '../components/blogCard';

describe('home page test', () => {
    const blogs = [
        {
          id: "1",
          name: "My First Blog Post",
          description: "<p>This is my first blog post. Welcome to my blog!</p>",
          creator: "John Doe",
        }
      ];
    test('renders blog title and content', () => {
          render(<BlogCard {...blogs[0]}/>);
          const postList = screen.getByTestId("test-blog-card");
          expect(postList).toBeInTheDocument();
          const postTitle = screen.getByText(blogs[0].name);
          expect(postTitle).toBeInTheDocument();
      });

    test('render button', () => {
        render(<BlogCard {...blogs[0]}/>);
        const button = screen.getByText("Show More");
        expect(button).toBeInTheDocument();
    })
})
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BlogCard } from '../components/blogCard';
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('blog card testing', () => {
    const blogs = [
        {
          id: "1",
          name: "My First Blog Post",
          description: "<p>This is my first blog post. Welcome to my blog!</p>",
          creator: "John Doe",
          time : "1/2/3"
        }
      ];
    test('renders blog title and content', () => {
          render(
            <MemoryRouter>
              <Provider store={store}>
                <BlogCard {...blogs[0]}/>
              </Provider>
            </MemoryRouter>);
          const postList = screen.getByTestId("test-blog-card");
          expect(postList).toBeInTheDocument();
          const postTitle = screen.getByText(blogs[0].name);
          expect(postTitle).toBeInTheDocument();
      });

    test('render button', () => {
        render(
          <MemoryRouter>
            <Provider store={store}>
              <BlogCard {...blogs[0]}/>
            </Provider>
          </MemoryRouter>);
        const button = screen.getByText("Show More");
        expect(button).toBeInTheDocument();
    })
})
import { CreateBlog } from '../pages/createBlog';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('single blog view page test', () => {
    test('should render', () => {
        render(
            <MemoryRouter>
              <Provider store={store}>
                <CreateBlog/>
              </Provider>
            </MemoryRouter>);
        
        const container = screen.getByTestId("create-blog");
        expect(container).toBeInTheDocument(); 
      });
})
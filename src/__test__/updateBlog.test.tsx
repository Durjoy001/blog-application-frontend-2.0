import { UpdateBlog } from '../pages/updateBlog';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('single blog view page test', () => {
    test('should render', () => {
        render(
            <MemoryRouter>
              <Provider store={store}>
                <UpdateBlog/>
              </Provider>
            </MemoryRouter>);
        
        const container = screen.getByTestId("update-blog");
        expect(container).toBeInTheDocument(); 
      });
})
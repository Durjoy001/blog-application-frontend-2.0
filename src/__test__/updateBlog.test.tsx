import { UpdateBlog } from '../pages/updateBlog';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { Routes, Route, MemoryRouter } from 'react-router-dom';

describe('single blog view page test', () => {
    test('should render', () => {
        render(
            <MemoryRouter initialEntries={['/blogs/1']} initialIndex={0}>
              <Provider store={store}>
                  <Routes>
                   <Route path="/blogs/:id" Component={UpdateBlog} />
                  </Routes>
              </Provider>
            </MemoryRouter>);
        
        const container = screen.getByTestId("update-blog");
        expect(container).toBeInTheDocument(); 
      });
})
import { Navbar } from "../components/navbar";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';

describe('Navbar test', () => {
    test('Navbar text and button testing', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>)
      const container = screen.getByTestId("navbar-test");
      expect(container).toBeInTheDocument(); 
    }); 

    test('Navbar text and button testing', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>)
      const button = screen.getByText("Blog Application");
      expect(button).toBeInTheDocument();
    }); 

    test('Navbar text and button testing', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>)
         
        const signUpButton = screen.getByText("LogIn or SignUp");
        expect(signUpButton).toBeInTheDocument();
        
    }); 
})
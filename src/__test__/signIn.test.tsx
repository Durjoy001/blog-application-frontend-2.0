import { SignIn } from '../pages/signIn';
import React from 'react';
import { render, screen , fireEvent } from '@testing-library/react';
import { useContext, useState } from "react";
import { Provider } from 'react-redux';
import { store }  from './../app/store'
import { MemoryRouter } from 'react-router-dom';


describe('Login Page Testing', () => {
    test('Testing Email Input', () => {
         render(
          <MemoryRouter>
            <Provider store={store}>
              <SignIn />
            </Provider>
          </MemoryRouter>)

         const emailInput = screen.getByTestId('test-email');
         expect(emailInput).toBeInTheDocument();
      }); 

    test('Testing Password Input', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </MemoryRouter>)

        const passwordInput = screen.getByTestId('test-password');
        expect(passwordInput).toBeInTheDocument();
     }); 
    
    test('Testing Button', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </MemoryRouter>)
        const submitButton = screen.getByRole('button', { name: /Login/i });
        const signUpButton = screen.getByTestId("test-signUp");

        expect(signUpButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    test('renders sign up link', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </MemoryRouter>)
        const signUpLink = screen.getByTestId('test-signUp');
        expect(signUpLink).toHaveAttribute('href', '/signup');
      });

    test("calls logIn function on form submission", () => {
        const logInSpy = jest.spyOn(console, "log");
        render(
          <MemoryRouter>
            <Provider store={store}>
              <SignIn />
            </Provider>
          </MemoryRouter>)
        const emailInput = screen.getByTestId("test-email");
        const passwordInput = screen.getByTestId("test-password");
        const submitButton = screen.getByText("Login");

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitButton);
        expect(logInSpy).toHaveBeenCalled();
        expect(logInSpy).toHaveBeenCalledWith("login");
      });
    
})
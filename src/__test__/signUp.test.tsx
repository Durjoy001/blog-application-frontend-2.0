import { SignUp } from '../pages/signUp';
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
                  <SignUp />
               </Provider>
            </MemoryRouter>)

         const emailInput = screen.getByTestId('test-email');
         expect(emailInput).toBeInTheDocument();
      }); 

      test('Testing Password Input', () => {
         render(
            <MemoryRouter>
               <Provider store={store}>
                  <SignUp />
               </Provider>
            </MemoryRouter>)

        const passwordInput = screen.getByTestId('test-password');
        expect(passwordInput).toBeInTheDocument();
     }); 

     test('Testing Password Input', () => {
         render(
            <MemoryRouter>
               <Provider store={store}>
                  <SignUp />
               </Provider>
            </MemoryRouter>)

        const nameInput = screen.getByTestId('test-name');
        expect(nameInput).toBeInTheDocument();
     });

     test('Testing Password Input', () => {
         render(
            <MemoryRouter>
               <Provider store={store}>
                  <SignUp />
               </Provider>
            </MemoryRouter>)

        const confirmPasswrodInput = screen.getByTestId('test-confirmPassword');
        expect(confirmPasswrodInput).toBeInTheDocument();
     });
    
    test('Testing Button', () => {
         render(
            <MemoryRouter>
               <Provider store={store}>
                  <SignUp />
               </Provider>
            </MemoryRouter>)

        const submitButton = screen.getByRole('button', { name: /SignUp/i });
        expect(submitButton).toBeInTheDocument();
    })
})
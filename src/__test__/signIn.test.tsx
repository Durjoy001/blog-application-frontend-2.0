import { SignIn } from '../pages/signIn';
import React from 'react';
import { render, screen , fireEvent } from '@testing-library/react';
import { useContext, useState } from "react";
describe('Login Page Testing', () => {
    test('Testing Email Input', () => {
         render(<SignIn />)

         const emailInput = screen.getByTestId('test-email');
         expect(emailInput).toBeInTheDocument();
      }); 

      test('Testing Password Input', () => {
        render(<SignIn />)

        const passwordInput = screen.getByTestId('test-password');
        expect(passwordInput).toBeInTheDocument();
     }); 
    
    test('Testing Button', () => {
        render(<SignIn />);
        const submitButton = screen.getByRole('button', { name: /Login/i });
        const signUpButton = screen.getByTestId("test-signUp");

        expect(signUpButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    test('renders sign up link', () => {
        render (<SignIn />);
        const signUpLink = screen.getByTestId('test-signUp');
        expect(signUpLink).toHaveAttribute('href', '/signup');
      });
})
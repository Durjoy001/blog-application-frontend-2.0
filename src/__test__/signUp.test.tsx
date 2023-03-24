import { SignUp } from '../pages/signUp';
import React from 'react';
import { render, screen , fireEvent } from '@testing-library/react';
import { useContext, useState } from "react";
describe('Login Page Testing', () => {
    test('Testing Email Input', () => {
         render(<SignUp />)

         const emailInput = screen.getByTestId('test-email');
         expect(emailInput).toBeInTheDocument();
      }); 

      test('Testing Password Input', () => {
        render(<SignUp />)

        const passwordInput = screen.getByTestId('test-password');
        expect(passwordInput).toBeInTheDocument();
     }); 

     test('Testing Password Input', () => {
        render(<SignUp />)

        const nameInput = screen.getByTestId('test-name');
        expect(nameInput).toBeInTheDocument();
     });

     test('Testing Password Input', () => {
        render(<SignUp />)

        const confirmPasswrodInput = screen.getByTestId('test-confirmPassword');
        expect(confirmPasswrodInput).toBeInTheDocument();
     });
    
    test('Testing Button', () => {
        render(<SignUp />);
        const submitButton = screen.getByRole('button', { name: /SignUp/i });

        expect(submitButton).toBeInTheDocument();
    })
})
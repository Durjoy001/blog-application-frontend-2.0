import { SignIn } from '../pages/signIn';
import { render, screen } from '@testing-library/react';
describe('Login Page Testing', () => {
    test('Testing Input Group', () => {
         render(<SignIn />)
         const emailInput = screen.getByTestId('test-email');
         const passwordInput = screen.getByTestId('test-password');
         
         expect(emailInput).toBeInTheDocument();
         expect(passwordInput).toBeInTheDocument();
      }); 
    
    test('Testing Button', () => {
        render(<SignIn />);
        const submitButton = screen.getByRole('button', { name: /Login/i });
        const signUpButton = screen.getByTestId("test-signUp");

        expect(signUpButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })
})
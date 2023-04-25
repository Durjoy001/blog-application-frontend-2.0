export interface SignInPayload {
    name: string;
    password: string;
  }
  
  export interface SignUpPayload extends SignInPayload {
    email: string;
    confirmPassword: string;
  }
  
  export interface RefreshToken {
    refresh_token: string;
  }
  export interface AccessToken {
    access_token: string;
  }
  
  export interface User extends SignInPayload {
    name: string;
    email: string;
  }
  export interface Tokens {
    access_token: string;
    refresh_token: string;
  }
  export interface SignInResponse {
    data: Tokens;
  }
  export interface AuthState {
    username?: string;
    loggedIn: boolean;
    access_token?: string;
  }
  
  export interface SetUser extends AuthState {
    refresh_token?: string;
  }
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React , {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import { signUp } from "./pages/signUp";
import { SignIn } from "./pages/signIn";
import { Blogs } from "./pages/blogs";
import { createBlog } from "./pages/createBlog";
import { BlogView } from "./pages/blogView";
import { updateBlog } from "./pages/updateBlog";
import { Navbar } from "./components/navbar";

const App : FC = () =>{
  return (
     <Router>
        <Navbar />
         <Routes>
             <Route path="/signup" Component={signUp} />
             <Route path="/signin" Component={SignIn} />
             <Route path="/" Component= {Blogs} />
             <Route path="/blogs" Component={createBlog} />
             <Route path="/blogs/view/:id" Component={BlogView} />
             <Route path="/blogs/:id" Component={updateBlog} />
         </Routes>
     </Router>
  );
}

export default App;

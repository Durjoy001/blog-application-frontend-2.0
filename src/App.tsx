import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React , {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import { signUp } from "./pages/signUp";
import { signIn } from "./pages/signIn";
import { blogs } from "./pages/blogs";
import { createBlog } from "./pages/createBlog";
import { blogView } from "./pages/blogView";
import { updateBlog } from "./pages/updateBlog";

const App : FC = () =>{
  return (
     <Router>
         <Routes>
             <Route path="/signup" Component={signUp} />
             <Route path="/signin" Component={signIn} />
             <Route path="/" Component= {blogs} />
             <Route path="/blogs" Component={createBlog} />
             <Route path="/blogs/view/:id" Component={blogView} />
             <Route path="/blogs/:id" Component={updateBlog} />
         </Routes>
     </Router>
  );
}

export default App;

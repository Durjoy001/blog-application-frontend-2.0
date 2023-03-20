import React, {FC} from 'react';
import data from './../data.json'
import { BlogCardList } from '../components/blogCardList';
interface Props {
  
}

export const blogs : FC<Props> = () => {
  return (
    <div>
      <BlogCardList Blogs = {data} /> 
     {/* <ul>
        {data.blogs.map((blog) => (
           
          <li key={blog.name}>{blog.name} - {blog.description} - {blog.creator}</li>
        ))}
      </ul> */}
    </div>
  );
}

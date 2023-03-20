import React, {FC} from 'react';
import { BlogCard } from './blogCard';

interface blog {
  id : string,
  name : string,
  description: string,
  creator : string
}

interface Props {
  Blogs : blog[]
} 

export const BlogCardList : FC<Props> = ({Blogs}) => {
  return (
    <div>
       {Blogs.map((blog) => (
           <BlogCard {...blog} /> 
       ))}
    </div>
  );
}

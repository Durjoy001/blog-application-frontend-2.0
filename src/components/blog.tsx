import React from 'react';



const Blog = (props : {blog : string}) => {
  return (
    <div>
      <h1>{props.blog}</h1>
    </div>
  );
}

export default Blog

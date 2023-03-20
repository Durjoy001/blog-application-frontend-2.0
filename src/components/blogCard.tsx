import React, {FC} from 'react';

interface Props {
  id : string,
  name : string,
  description: string,
  creator : string
}



export const BlogCard : FC<Props> = ({id, name , description , creator}) => {
  return (
    <div>
      <h1> {id} </h1>
      <h2> {name}</h2>
      <h2> {description}</h2>
      <h2> {creator}</h2>
    </div>
  );
}

import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import data from './../data.json'
import { BlogCard } from '../components/blogCard';

interface Props {

}

export const BlogView : FC<Props> = () => {
  const {id}   = useParams ();
  var blogID: number = Number(id);
  return (
    <div>
      <BlogCard {...data[blogID]}/>
    </div>
  );
}

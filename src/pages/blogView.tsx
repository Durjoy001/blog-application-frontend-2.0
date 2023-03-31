import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
//import data from './../data.json'
import { BlogCard } from '../components/blogCard';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { BlogDetails } from '../components/blogDetails';
interface Props {

}

export const BlogView : FC<Props> = () => {
  const data = useAppSelector((state: RootState) => state.blogs);
  const {id}   = useParams ();
  console.log({id});
  var blogID: number = Number(id);
  return (
    <div>
      <BlogDetails {...data[blogID]}/>
    </div>
  );  
}

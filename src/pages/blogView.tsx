import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
//import data from './../data.json'
import { BlogCard } from '../components/blogCard';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';

interface Props {

}

export const BlogView : FC<Props> = () => {
  const data = useAppSelector((state: RootState) => state.blogs);
  const {id}   = useParams ();
  var blogID: number = Number(id);
  return (
    <div>
      <BlogCard {...data[blogID]}/>
    </div>
  );
}

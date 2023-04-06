import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { BlogDetails } from '../components/blogDetails';
interface Props {

}

export const BlogView : FC<Props> = () => {
  const data = useAppSelector((state: RootState) => state.blogs);
  const {id}   = useParams ();
  var blogID: number = Number(id);
  return (
    <div data-testid = "single-blog-view" >
      <BlogDetails {...data[blogID]}/>
    </div>
  );  
}

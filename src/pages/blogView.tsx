import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { BlogDetails } from '../components/blogDetails';
import { useGetBlogQuery } from '../api/blogApi';
import { BlogID } from '../models/blogModel';
interface Props {

}

export const BlogView : FC<Props> = () => {
  //const data = useAppSelector((state: RootState) => state.blogs);
  const {id}  = useParams();
  //var blogID: number = Number(id);
  console.log(id);
  const {data} = useGetBlogQuery(id);
  return (
    <div data-testid = "single-blog-view" >
      <BlogDetails {...data}/>
    </div>
  );  
}

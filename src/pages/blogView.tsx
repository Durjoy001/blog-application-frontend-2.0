import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import { BlogDetails } from '../components/blogDetails';
import { useGetBlogQuery } from '../api/blogApi';
interface Props {

}

export const BlogView : FC<Props> = () => {
  const {id}  = useParams();
  const {data} = useGetBlogQuery(id);

  return (
    <div data-testid = "single-blog-view" >
      <BlogDetails {...data}/>
    </div>
  );  
}

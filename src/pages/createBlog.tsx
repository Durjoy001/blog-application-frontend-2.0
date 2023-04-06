import React, {FC} from 'react';
import { CreateBlogDetails } from '../components/createBlogDetails';

interface Props {
}

export const CreateBlog : FC<Props> = () => {
  return (
    <div data-testid = "create-blog">
       <CreateBlogDetails />
    </div>
  );
}

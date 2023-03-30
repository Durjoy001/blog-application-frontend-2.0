import React, {FC} from 'react';
import { CreateBlogDetails } from '../components/createBlogDetails';

interface Props {
}

export const CreateBlog : FC<Props> = () => {
  return (
    <div>
       <CreateBlogDetails />
    </div>
  );
}

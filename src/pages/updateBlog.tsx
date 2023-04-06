import React, {FC} from 'react';
import { EditBlog } from '../components/editBlog';

interface Props {
}

export const UpdateBlog : FC<Props> = () => {
  return (
    <div data-testid = "update-blog">
       <EditBlog />
    </div>  
  );  
}
  
import React, {FC} from 'react';
import { EditBlog } from '../components/editBlog';

interface Props {
}

export const updateBlog : FC<Props> = () => {
  return (
    <div>
       <EditBlog />
    </div>  
  );  
}
  
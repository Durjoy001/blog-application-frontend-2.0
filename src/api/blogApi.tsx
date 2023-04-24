import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    Blog,
    BlogsResponse,
    BlogResponse,
    AddBlog,
    UpdateBlog,
  } from "../models/blogModel";

export const blogApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
    endpoints: builder => ({
      getBlogs: builder.query<any, void>({
        query: () => '/blogs'
      }),
      getBlog: builder.query<any, string | undefined>({
        query: id => `/blogs/${id}`
      }),
      addNewBlog: builder.mutation({
        query: initialPost => ({
          url: '/blogs',
          method: 'POST',
          // Include the entire post object as the body of the request
          body: initialPost
        })
      }),
      updateBlog: builder.mutation({
        query: ({ id, ...rest }) => ({
          url: `/blogs/${id}`,
          method: "PUT",
          body: rest,
        })
      }),
      deleteBlog: builder.mutation({
        query: (id) => ({
          url: `/blogs/${id}`,
          method: "DELETE",
        })
      }),
    })
  })
  
  export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation
  } = blogApi
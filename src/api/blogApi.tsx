import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    Blog,
    BlogsResponse,
    BlogResponse,
    AddBlog,
    UpdateBlog,
  } from "../models/blogModel";

  import {
    SignInPayload,
    SignUpPayload,
    RefreshToken,
    AccessToken,
    SignInResponse,
  } from "../models/authModel";

export const blogApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
    tagTypes: ["Blogs"],
    endpoints: builder => ({
      getBlogs: builder.query<any, void>({
        query: () => '/blogs',
        providesTags: ['Blogs']
      }),
      getBlog: builder.query<any, string | undefined>({
        query: id => `/blogs/${id}`,
        providesTags: ['Blogs']
      }),
      addNewBlog: builder.mutation<void,any>({
        query: ({name,description,access_token}) => ({
          url: '/blogs' ,
          method: 'POST' ,
          body: {name,description},
          headers: {Authorization : `Bearer ${access_token}`},
        }),
        invalidatesTags: ['Blogs']
      }),
      updateBlog: builder.mutation<void,any>({
        query: ({id,name,description,access_token}) => ({
          url: `/blogs/${id}` ,
          method: 'PATCH' ,
          body: {name,description},
          headers: {Authorization : `Bearer ${access_token}`},
        }),
        invalidatesTags: ['Blogs']
      }),
      deleteBlog: builder.mutation<void,any>({
        query: ({id, access_token}) => ({
          url: `/blogs/${id}`,
          body: {},
          headers: {Authorization : `Bearer ${access_token}`},
          method: "DELETE",
        }),
        invalidatesTags: ['Blogs']
      }),
      signIn: builder.mutation<any, any>({
        query: (body) => ({
          url: "/users/login",
          method: "POST",
          body,
        }),
      }),
      signUp: builder.mutation({
        query: (body) => ({
          url: "/users/signup",
          method: "POST",
          body,
        }),
      }),
      signOut: builder.mutation<void, void>({
        query: () => ({
          url: "/users/logout",
          method: "POST",
          body: { refresh_token: localStorage.getItem("refresh_token") || null },
        }),
      }),
    })
  })
  
  export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
    useSignInMutation,
    useSignUpMutation, 
    useSignOutMutation
  } = blogApi
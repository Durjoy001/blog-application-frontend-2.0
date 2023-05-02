import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError, } from "@reduxjs/toolkit/query";
import { RootState } from "../app/store";
import { setNewAccessToken, removeUser } from "../slices/authSlice";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Mutex } from "async-mutex";


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
        const access_token = (getState() as RootState).auth.access_token;
        if (access_token) {
          headers.set("authorization", `Bearer ${access_token}`);
          return headers;
        }
    },
})

const mutex = new Mutex();

const baseQueryAuth: BaseQueryFn< string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const statusCode =  result.error && result.error instanceof Object && 'originalStatus' in result.error
                    ? (result.error as { originalStatus?: number }).originalStatus : result.error?.status ;

   console.log(result.error)

  if (result.error && (statusCode === 401 || statusCode === 500)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const userRefreshToken = localStorage.getItem('refresh_token');
        const refreshResult = await baseQuery(
            {
               url: "/users/generateToken",
               method : "POST",
               body: {
                userRefreshToken
               },
            },
            api,
            extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(setNewAccessToken(refreshResult.data));
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(removeUser());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryAuth;
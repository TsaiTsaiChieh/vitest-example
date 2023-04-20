/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/ban-types */

import {
  type BaseQueryFn,
  type FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query'
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_URL,
}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>

export const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown, CustomError, {}> = async (args, api, extraOptions) => {
  return await baseQuery(args, api, extraOptions)
}

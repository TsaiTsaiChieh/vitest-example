/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (builder) => ({
    getWeek: builder.query<GetWeekRes, void>({
      query: () => '/week',
    }),
  }),
})

export const { useLazyGetWeekQuery } = api

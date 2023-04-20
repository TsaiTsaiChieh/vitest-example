/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi } from '@reduxjs/toolkit/query/react'

import { customBaseQuery } from './customBaseQuery'

export const api = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getWeek: builder.query<GetWeekRes, void>({
      query: () => {
        return { url: '/week', method: 'GET' }
      },
    }),
  }),
})

export const { useLazyGetWeekQuery } = api

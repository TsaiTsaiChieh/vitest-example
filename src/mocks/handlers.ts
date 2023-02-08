import { rest } from 'msw'
const { VITE_APP_URL } = import.meta.env

export const handlers = [
  rest.get(
    `${VITE_APP_URL}/week`,
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          days: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
        }),
      )
    },
  ),
]

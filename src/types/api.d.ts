interface GetWeekRes {
  days: []
}
interface CustomError {
  status: number | string
  data: {
    error: string
    code: number
  }
}

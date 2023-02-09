import axios from 'axios'
import { useState } from 'react'

const { VITE_APP_URL } = import.meta.env

const Button07 = () => {
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const getData = async () => {
    const data: GetWeekRes = (await axios.get(`${VITE_APP_URL}/week`)).data
    setData(data.days)
  }
  const handleClick = async () => {
    setLoading(true)
    try {
      await getData()
      setLoading(false)
    } catch (error: any) {
      // setError('error')
      setError(error.response.data.detail)
    }
  }
  return (
    <div className='flex flex-col'>
      <button
        className='bg-amber-700 text-white p-5 text-[30px] rounded-lg font-bold'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
      >
        Get Data
      </button>
      <div className='mt-2'>
        {!error && loading
          ? (
          <span>Loading...</span>
            )
          : (
          <ul>
            {data.map((ele: string) => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
            )}
        {error && <span>{error}</span>}
      </div>
    </div>
  )
}

export default Button07

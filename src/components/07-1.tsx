import { useState } from 'react'

import { useLazyGetWeekQuery } from '../services/api'

const Button07_ = () => {
  const [getWeek, { isLoading, error }] = useLazyGetWeekQuery()
  const [data, setData] = useState<string[]>([])

  const handleClick = async () => {
    await getWeek()
      .unwrap()
      .then((result) => {
        setData(result.days)
      })
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
        {isLoading
          ? (
          <span>Loading...</span>
            )
          : (
          <ul>
            {data.length !== 0 &&
              data.map((ele: string) => <li key={ele}>{ele}</li>)}
          </ul>
            )}
        {error && <span>{error.data}</span>}
      </div>
    </div>
  )
}

export default Button07_

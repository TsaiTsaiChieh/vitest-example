import { useState } from 'react'

const Button04 = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleOnClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <div className='flex flex-col'>
      <button
        disabled={loading}
        className='bg-green-500 text-white p-5 text-[30px] rounded-lg font-bold disabled:opacity-80'
        onClick={handleOnClick}
      >
        Click Me
      </button>
      {loading && <span className='font-base m-1'>Loading...</span>}
    </div>
  )
}

export default Button04

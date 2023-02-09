import { useCounter } from '../hooks/useCounter'
const Button08 = () => {
  const { count, increment } = useCounter()

  return (
    <div className="flex flex-col">
      <span className='font-bold text-2xl mb-2'>{count}</span>
    <button className='bg-black text-white p-5 text-[30px] rounded-lg font-bold'
    onClick={increment}
    >
    Increment
  </button>
  </div>
  )
}

export default Button08

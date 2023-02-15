import { useAppSelector } from '../store/hook'
import { useAppDispatch } from '../store/hook/index'
import { add } from '../store/reducers/counterSlice'

const Button08_ = () => {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector(state => state.counter)
  const increment = () => {
    dispatch(add())
  }

  return (
    <div className='flex flex-col'>
      <span className='font-bold text-2xl mb-2'>{count}</span>
      <button
        className='bg-black text-white p-5 text-[30px] rounded-lg font-bold'
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}

export default Button08_

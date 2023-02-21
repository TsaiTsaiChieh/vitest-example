import { useRef } from 'react'

interface Props {
  num: number
}
const Trade = ({ num }: Props) => {
  // Returns a random integer from 1 to 9:
  const price = useRef<number>(Math.floor(Math.random() * 10) + 1)
  const totalPrice = num * price.current
  return (
    <div className="p-4 border-indigo-600 border w-[50%]">
      <h2 className="font-bold text-2xl mb-4">{num} 個木頭拿去交易</h2>
      <span>賣完，得 ${totalPrice}</span>
    </div>
  )
}

export default Trade

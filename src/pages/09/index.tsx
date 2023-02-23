
import { useState } from 'react'

import Decorate from './Decorate'
import Trade from './Trade'

const Page09 = () => {
  const [wood, setWood] = useState<number>(100)
  const onClick = () => {
    setWood((prev) => prev + 100)
  }
  return (
    <div className='p-8 flex flex-col w-[600px]'>
      <div className='border border-green-800 p-8'>
        <h1 className='font-bold text-2xl mb-4'>{wood} 個木頭可以做什麼？</h1>
        <button className='font-bold bg-green-400 p-3 rounded-lg hover:bg-green-600 text-white text-lg' onClick={onClick}>加點木頭</button>
      </div>
    <div className='flex'>
      <Trade num={wood / 2}/>
      <Decorate num={wood / 2}/>
    </div>
    </div>
  )
}

export default Page09

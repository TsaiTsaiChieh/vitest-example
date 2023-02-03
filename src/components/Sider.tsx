import { useNavigate } from 'react-router-dom'

import { Journey } from '../view/Journey'

const Sider = () => {
  const nav = useNavigate()
  const navigateTo = (path: string) => {
    nav(path)
  }

  return (
    <div className='h-screen w-[270px] bg-slate-200 p-[20px]'>
      <ul className='mt-2 flex flex-col gap-1 text-[14px]'>
        {Journey.map(({ name, path }) => (
          <li
          className='cursor-pointer tracking-wide'
            key={name}
            onClick={() => {
              navigateTo(path)
            }}
          >{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sider

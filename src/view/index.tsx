import { Route, Routes } from 'react-router-dom'

import Main from '../pages/Main'
import { Journey } from './Journey'

const View = () => {
  return (
    <Routes>
      {/* alway redirect to first Journey path */}
      <Route path='*' element={<Main child={Journey[0].element}/>}/>
      {Journey.map(({ name, path, element }) => (
        <Route key={name} path={path} element={<Main child={element}/>} />
      ))}
    </Routes>
  )
}

export default View

import Button01 from '../components/01'
import Button02 from '../components/02'
import Button03 from '../components/03'
import Button04 from '../components/04'
import Button05 from '../components/05'
import Button06 from '../components/06'
import Button07 from '../components/07'
import Button07_ from '../components/07-1'
import Button08 from '../components/08'
import Button08_ from '../components/08-1'
import Page09 from '../pages/09'

export const Journey = [
  {
    name: '01 第一個測試、快照',
    path: '/01',
    element: <Button01 />,
  },
  {
    name: '02 測試步驟、Props',
    path: '/02',
    element: <Button02 content='Hello' />,
  },
  {
    name: '03 mock function、fireEvent',
    path: '/03',
    element: (
      <Button03
        content='Click'
        onClick={() => {
          alert('Hi')
        }}
      />
    ),
  },
  {
    name: '04 mock 時間、act',
    path: '/04',
    element: <Button04 />,
  },
  {
    name: '05 styled components、debug',
    path: '/05',
    element: <Button05 />,
  },
  {
    name: '06 subtest、test each',
    path: '/06',
    element: <Button06 />,
  },
  {
    name: '07 mock api、waifFor',
    path: '/07',
    element: <Button07 />,
  },
  {
    name: '07.1 mock api (RTK-Q)',
    path: '/07_',
    element: <Button07_ />,
  },
  {
    name: '08 react hook',
    path: '/08',
    element: <Button08 />,
  },
  {
    name: '08.1 react hook (RTK-Q)',
    path: '/08_',
    element: <Button08_ />,
  },
  {
    name: '09 mock component、整合測試',
    path: '/09',
    element: <Page09 />,
  },
]

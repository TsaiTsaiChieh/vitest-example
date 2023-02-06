import {
  Component01,
  Component02,
  Component03,
  Component04,
  Component05,
  Component06,
  Component07,
  Component08,
  Component09,
} from '../components'

export const Journey = [
  {
    name: '01 第一個測試、快照',
    path: '/01',
    element: <Component01 />,
  },
  {
    name: '02 測試步驟、Props',
    path: '/02',
    element: <Component02 content='Hello'/>,
  },
  {
    name: '03 mock function、fireEvent',
    path: '/03',
    element: <Component03 />,
  },
  {
    name: '04 mock 時間、act',
    path: '/04',
    element: <Component04 />,
  },
  {
    name: '05 styled components、debug',
    path: '/05',
    element: <Component05 />,
  },
  {
    name: '06 subtest、test each',
    path: '/06',
    element: <Component06 />,
  },
  {
    name: '07 mock api、waifFor',
    path: '/07',
    element: <Component07 />,
  },
  {
    name: '08 react hook',
    path: '/08',
    element: <Component08 />,
  },
  {
    name: '09 mock component、整合測試',
    path: '/09',
    element: <Component09 />,
  },
]

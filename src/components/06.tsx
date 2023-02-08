import { ButtonEnum } from '../constants/enum'

interface Props {
  type?: string | ButtonType
}
const Button06 = ({ type }: Props) => (
  <button
    className={`${getClx(
      type,
    )} text-white p-5 text-[30px] rounded-lg font-bold`}
  >
    Button
  </button>
)

const getClx = (type?: string | ButtonType): string => {
  const defaultClx = 'bg-blue-500'
  switch (type) {
    case ButtonEnum.RED:
      return 'bg-red-500'
    case ButtonEnum.GREEN:
      return 'bg-green-500'
    default:
      return defaultClx
  }
}

export default Button06

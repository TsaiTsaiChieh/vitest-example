interface Props {
  content: string
  onClick: () => void
}
const Button03 = ({ content, onClick }: Props) => {
  return (
    <button
      className='bg-yellow-500 text-white p-5 text-[30px] rounded-lg font-bold'
      onMouseDown={onClick}
    >
      {content}
    </button>
  )
}

export default Button03

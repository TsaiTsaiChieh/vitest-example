interface Props {
  content: string
}
const Button02 = ({ content }: Props) => (
  <button className='bg-orange-500 text-white p-5 text-[30px] rounded-lg font-bold'>
    {content}
  </button>
)

export default Button02

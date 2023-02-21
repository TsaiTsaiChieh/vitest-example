
interface Props {
  num: number
}
const Decorate = ({ num }: Props) => {
  return (
    <div className="p-4 border-red-400 border w-[50%]">
      <h2 className="font-bold text-2xl mb-4">{num} 個木頭拿去裝飾</h2>
      <span>拿去裝飾小花園的圍籬</span>
    </div>
  )
}

export default Decorate

import Sider from '../components/Sider'

interface Props {
  child: React.ReactNode
}
const Main = ({ child }: Props) => {
  return (
    <section className='flex'>
      <Sider />
      <div className='p-[50px]'>{child}</div>
    </section>
  )
}

export default Main

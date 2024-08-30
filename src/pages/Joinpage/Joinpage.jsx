import bg from '../../assets/imgs/contactpage/bg.jpg'
import Herosec from '../../components/Herosection/Herosec'
import Formjoin from './Formjoin'
const Joinpage = () => {
  return (
    <div>
        <Herosec bg={bg} title={'Join Us'} />
        <Formjoin />
    </div>
  )
}

export default Joinpage
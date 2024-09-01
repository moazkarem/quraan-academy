import bg from '../../assets/imgs/joinPage/bg.png'
import Footer from '../../components/Footer/Footer'
import Herosec from '../../components/Herosection/Herosec'
import Formjoin from './Formjoin'
const Joinpage = () => {
  return (
    <div>
        <Herosec bg={bg} title={'Join Us'} />
        <Formjoin />
        <Footer />
    </div>
  )
}

export default Joinpage
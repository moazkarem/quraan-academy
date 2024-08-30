
import Herosec from '../../components/Herosection/Herosec'
import bg from '../../assets/imgs/contactpage/bg.jpg'
import Formsec from './Formsec'
import Footer from '../../components/Footer/Footer'
const ContactPage = () => {
  return (
    <div>
        <Herosec bg={bg} title={'Contact us'}/>
        <Formsec />
        <Footer />
    </div>
  )
}

export default ContactPage
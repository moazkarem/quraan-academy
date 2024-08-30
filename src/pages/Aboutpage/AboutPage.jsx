import Footer from "../../components/Footer/Footer"
import Herosec from "../../components/Herosection/Herosec"
import AboutSec from "../HomePage/AboutSec"
import ChoseourSec from "../HomePage/ChoseourSec"
import CountersSec from "../HomePage/CountersSec"
import Missionsec from "./Missionsec"
import aboutbg from '../../assets/imgs/About page/about.jfif'

const AboutPage = () => {
  return (
  <div >
    <Herosec bg={aboutbg} title={'About us'}/>
    <AboutSec />
    <Missionsec />
    <div className="mb-28">
    <ChoseourSec />
    </div>
    <CountersSec />
    <Footer />
  </div>
  )
}

export default AboutPage
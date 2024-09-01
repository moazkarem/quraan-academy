import Carousel from "../../components/Carosel/Carosel"
import AboutSec from "./AboutSec"
import ArticlesSec from "./ArticlesSec"
import ChoseourSec from "./ChoseourSec"
import  CountersSec  from "./CountersSec"
import CoursesHomesec from "./CoursesHomesec"
import Footer from "../../components/Footer/Footer"
import Testimonials from "./Testmonials"
import { FaAnglesUp } from "react-icons/fa6";
import { useState } from "react"
const Home = () => {
  const [top , setTop] = useState(false)
  window.onscroll = ()=>{
    if(window.scrollY >= 600){
      setTop(true)
    }else{
      setTop(false)
    }
  }
  return (
    <div>
      <Carousel />
      <AboutSec />
      <CountersSec />
      <ChoseourSec />
      <CoursesHomesec />
      <Testimonials />
      <ArticlesSec />
      <Footer />
      <button onClick={()=>window.scrollTo(0 ,0)} className={top===false?'top-hide':'topShow'}> <FaAnglesUp /> </button>
    </div>
  )
}

export default Home
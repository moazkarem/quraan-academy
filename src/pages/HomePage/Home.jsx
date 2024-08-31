import Carousel from "../../components/Carosel/Carosel"
import AboutSec from "./AboutSec"
import ArticlesSec from "./ArticlesSec"
import ChoseourSec from "./ChoseourSec"
import  CountersSec  from "./CountersSec"
import CoursesHomesec from "./CoursesHomesec"
import Footer from "../../components/Footer/Footer"
import Testimonials from "./Testmonials"

const Home = () => {
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
    </div>
  )
}

export default Home
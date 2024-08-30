import Carousel from "../../components/Carosel/Carosel"
import AboutSec from "./AboutSec"
import ArticlesSec from "./ArticlesSec"
import ChoseourSec from "./ChoseourSec"
import  CountersSec  from "./CountersSec"
import Courses from "./Courses"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutSec />
      <CountersSec />
      <ChoseourSec />
      <Courses />
      <ArticlesSec />
      <Footer />
    </div>
  )
}

export default Home
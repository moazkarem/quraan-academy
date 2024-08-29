import Carousel from "../../components/Carosel/Carosel"
import AboutSec from "./AboutSec"
import ArticlesSec from "./ArticlesSec"
import ChoseourSec from "./ChoseourSec"
import  CountersSec  from "./CountersSec"
import Courses from "./Courses"


const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutSec />
      <CountersSec />
      <ChoseourSec />
      <Courses />
      <ArticlesSec />
    </div>
  )
}

export default Home
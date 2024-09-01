import bg from '../../assets/imgs/coursespage/bg-course-page.png'
import Herosec from '../../components/Herosection/Herosec'
import Allcourses from './Allcourses'
import Footer from '../../components/Footer/Footer'
const Coursespage = () => {
  return (
    <div>
        <Herosec bg={bg} title={'Courses'} />
        <Allcourses />
        <Footer />
    </div>
  )
}

export default Coursespage
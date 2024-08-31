
import Herosec from '../../../components/Herosection/Herosec'
import bg from '../../../assets/imgs/About page/about.jfif'
import CourseContent from './CourseContent'
import CourseOverview from './CourseOverview'
import Footer from '../../../components/Footer/Footer'
const CourseDetails = () => {
  return (
    <div>

      <Herosec bg={bg} title={'Courses / Course Details'} />
      <CourseContent />
      <CourseOverview />
      <Footer />
    </div>
  )
}

export default CourseDetails
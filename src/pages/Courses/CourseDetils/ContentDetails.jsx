
import Herosec from '../../../components/Herosection/Herosec'
import bg from '../../../assets/imgs/About page/about.jfif'
import CourseDetails from './CourseDetails'
import CourseOverview from './CourseOverview'
import Footer from '../../../components/Footer/Footer'
const ContentDetails = () => {
  return (
    <div>

      <Herosec bg={bg} title={'Courses / Course Details'} />
      <CourseDetails />
      <CourseOverview />
      <Footer />
    </div>
  )
}

export default ContentDetails
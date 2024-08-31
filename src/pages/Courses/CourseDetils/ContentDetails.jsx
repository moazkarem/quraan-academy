
import Herosec from '../../../components/Herosection/Herosec'
import bg from '../../../assets/imgs/About page/about.jfif'
import CourseDetails from './CourseDetails'
const ContentDetails = () => {
  return (
    <div>

      <Herosec bg={bg} title={'Courses / Course Details'} />
      <CourseDetails />
    </div>
  )
}

export default ContentDetails
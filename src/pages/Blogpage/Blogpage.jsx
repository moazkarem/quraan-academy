import bg from '../../assets/imgs/Blogpage/bg-blog-page.jpg'
import Herosec from '../../components/Herosection/Herosec'
import Allblogs from './Allblogs'
import Footer from '../../components/Footer/Footer'
const AllBlogs = () => {
  return (
    <div>
        <Herosec bg={bg} title={'Blogs'} />
        <Allblogs />
        <Footer />
    </div>
  )
}

export default AllBlogs
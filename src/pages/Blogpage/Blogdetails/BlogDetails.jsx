import Herosec from '../../../components/Herosection/Herosec'
import bg from '../../../assets/imgs/Blogpage/bg-blog-det.jpg'
import ContentBlogs from './ContentBlogs'
import BlogOverview from './BlogOverview'
import Footer from '../../../components/Footer/Footer'

const BlogDetails = () => {
  return (
    <div>
      <Herosec bg={bg} title={'Blogs / Blog Details'} />
      <ContentBlogs />
      <BlogOverview />
      <Footer />
    </div>
  )
}

export default BlogDetails
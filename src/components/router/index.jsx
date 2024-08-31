import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import RootLayout from "../../pages/Layout/Layout";
import Home from "../../pages/HomePage/Home";
import AboutPage from "../../pages/Aboutpage/AboutPage";
import ContactPage from "../../pages/Contactpage/ContactPage";
import Joinpage from "../../pages/Joinpage/Joinpage";
import Coursespage from "../../pages/Courses/Coursespage";
import Blogpage from '../../pages/Blogpage/Blogpage'
import CourseDetails from '../../pages/Courses/CourseDetils/CourseDetails'
import BlogDetails from "../../pages/Blogpage/Blogdetails/BlogDetails";
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}  >
            <Route index element={<Home />}  />
            <Route path="about" element={<AboutPage />}  />
            <Route path="contact" element={<ContactPage />}  />
            <Route path="joinus" element={<Joinpage />}  />
            <Route path="courses" element={<Coursespage />}  />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="blogs" element={<Blogpage />}  />
            <Route path="/blogs/:id" element={<BlogDetails />} />

        </Route>
    )

  )

  export default router
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
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}  >
            <Route index element={<Home />}  />
            <Route path="about" element={<AboutPage />}  />
            <Route path="contact" element={<ContactPage />}  />
            <Route path="joinus" element={<Joinpage />}  />
            <Route path="courses" element={<Coursespage />}  />
            <Route path="blogs" element={<Blogpage />}  />
        </Route>
    )

  )

  export default router
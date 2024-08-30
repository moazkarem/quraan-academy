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

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}  >
            <Route index element={<Home />}  />
            <Route path="about" element={<AboutPage />}  />
            <Route path="contact" element={<ContactPage />}  />
            <Route path="joinus" element={<Joinpage />}  />
        </Route>
    )

  )

  export default router
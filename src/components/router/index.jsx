import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import RootLayout from "../../pages/Layout/Layout";
import Home from "../../pages/HomePage/Home";

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}  >
            <Route index element={<Home />}  />
        </Route>
    )

  )

  export default router
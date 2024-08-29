import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Drawer/Footer";
const RootLayout = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default RootLayout;

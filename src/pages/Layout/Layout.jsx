import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

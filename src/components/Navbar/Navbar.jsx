import { useState, useEffect } from "react";
import Drawer from "../Drawer/Drawer";
import Button from "../../Ui/Button";
import { NavLink } from "react-router-dom";
import logo from '../../assets/imgs/logo/logo2.jpg'
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
      <div
        className={`navbar ${
          scrollY > 300 ? "bg-primary" : ""
        } transition-all duration-500 right-0  w-full z-50 h-20 fixed left-0 `}
      >
        <div className="container mx-auto px-4 flex justify-between items-center sm:flex">
          <div className="flex items-center lg:hidden">
            <button
              className="btn btn-square text-white me-3 btn-ghost"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-7 w-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center flex-1 lg:flex-none text-center lg:text-left">
            <img
              className="w-14 max-sm:w-9 rounded-md me-2"
              src={logo}
              alt="logo"
            />
            <h3 className="text-2xl max-sm:text-[16px] text-white font-bold">HADAYA</h3>
          </div>
          <div className="head-links flex lg:flex md:hidden sm:hidden flex-1 justify-center space-x-4">
            <ul className="menu menu-horizontal p-0">
              <li className="text-lg p-2">
                <NavLink
                  to="/"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/about"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  About
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/blog"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Our Courses
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/blog"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/contact"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <Button
              style={`text-white ${scrollY>300 ? 'bg-[#ffb921]' :'bg-primary' } btn-sm rounded-3xl btn text-lg px-6 max-sm:px-4 max-sm:text-[14px] hover:bg-primary`}
            >
             Join us
            </Button>



          </div>
        </div>

        <Drawer
        toggleDrawer={toggleDrawer}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
      </div>
      
   
  );
};

export default Navbar;

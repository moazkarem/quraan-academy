import { useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen, toggleDrawer }) => {
  const drawerRef = useRef(null);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  const handleClickOutside = useCallback(
    (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    },
    [closeDrawer]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={drawerRef} style={{ zIndex: "50" }}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div>
      <div className="drawer-side w-75 bg-transparent ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu menu-vertical bg-primary  p-4 w-80 fixed h-full ">
          <li className="text-center ">
            <div className=" flex items-center flex-1 lg:flex-none text-center lg:text-left">
              <img
                className="w-9 me-2"
                src="https://user-liard-alpha.vercel.app/assets/logo-921ec42d.png"
                alt="logo "
              />
              <h3 className="text-2xl text-white font-bold"> Furnival </h3>
            </div>
          </li>
          <li className="text-lg p-2">
            <NavLink
              to="/"
              className="text-white hover:text-[#ffb921] hover:bg-transparent text-lg "
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/about" className="text-white hover:text-[#ffb921] ">
              About
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/courses" className="text-white hover:text-[#ffb921] ">
              Our Courses
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/blogs" className="text-white hover:text-[#ffb921] ">
              Blog
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/contact" className="text-white hover:text-[#ffb921] ">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

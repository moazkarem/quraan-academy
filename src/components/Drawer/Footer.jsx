import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaPinterestP,
    FaLocationDot,
    FaPhone,
    FaRegEnvelope,
  } from "react-icons/fa6";
import logo from '../../assets/imgs/logo/logo2.jpg'
  const Footer = () => {
    return (
      <footer>
         
        <div className="foot-bg bg-fixed relative mt-10 py-20 flex justify-between flex-wrap max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem]">
        <div className="absolute inset-0 bg-primary opacity-25"></div>
          <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 max-sm:flex max-sm:justify-center mt-5">
            <div className="space-y-5">
            <div className="flex items-center flex-1 lg:flex-none text-center lg:text-left">
            <img
              className="w-14 max-sm:w-9 rounded-md me-2"
              src={logo}
              alt="logo"
            />
            <h3 className="text-2xl max-sm:text-[16px] text-white font-bold">HADAYA</h3>
          </div>
              <p className="text-gray-300 text-base capitalize">
                The Perfect Place For Every Contemporary Furniture Store And
                Manufacturer. This Is Furnival
              </p>
              <div className="flex space-x-1">
                <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                  <FaFacebookF />
                </span>
                <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                  <FaTwitter />
                </span>
                <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                  <FaInstagram />
                </span>
                <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                  <FaWhatsapp />
                </span>
                <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                  <FaPinterestP />
                </span>
              </div>
            </div>
          </div>
  
          <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-2/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
            <h3 className="font text-white font-semibold text-xl capitalize">
             Contac Info
            </h3>
            <hr className="border-gray-300 w-14" />
            <div>
              <ul className=" text-gray-300 font-semibold list-disc px-3 ">
                <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                  About Us
                </li>
                <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                  Blogs & Articles
                </li>
                <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                  Privacy Policy
                </li>
                <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
  
          <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
          <h3 className="font text-white font-semibold text-xl capitalize">
             Latest Courses
            </h3>
            <hr className="border-gray-300 w-14" />
            <div>
              <div>
                <ul className=" text-gray-300 font-semibold list-disc px-3 grid grid-cols-2">
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    sofas
                  </li>
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    chairs
                  </li>
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    doors
                  </li>
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    lamps
                  </li>
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    tables
                  </li>
                  <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                    drawers
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 space-y-5 mt-5">
            <h3 className="font text-white font-semibold text-xl capitalize">
              Latest News
            </h3>
            <hr className="border-gray-300 w-14" />
            <div>
              <div className="flex space-x-2 text-gray-300 py-1">
                <FaLocationDot />
                <span>ITI, Ismailia, Egypt</span>
              </div>
              <div className="group flex space-x-2 cursor-pointer">
                <span className="text-gray-300 py-1 group-hover:text-gray-300 duration-300">
                  <FaRegEnvelope />
                </span>
                <span className=" text-gray-300  group-hover:text-secondary  duration-300">
                  Furnival@example.com
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 group cursor-pointer">
                <span className="py-1 group-hover:text-gray-300 duration-300 text-gray-300">
                  <FaPhone />
                </span>
                <span className="text-gray-300  group-hover:text-secondary  duration-300">
                  +000 000 0000
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex flex-wrap bg-primary opacity-80 justify-around py-2 ">
          <div className="flex flex-wrap gap-5">
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer  ">
              Terms To Use
            </a>
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer  ">
              Privcy Policy
            </a>
          </div>
          <div className=" text-gray-300">
            2023 © Furnival. All Rights are Reserved
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
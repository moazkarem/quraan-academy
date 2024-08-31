/* eslint-disable react/jsx-key */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testmonials = () => {
  const swiperRef = useRef(null);
   
const opinions = [
  {  stars:[
   
     
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
  ],
  text:'lorem ipsum dolor sit amet, consectetur , lorem ipsum dolor sit amet, consectetu  lorem ipsum dolor sit amet, consectetur' ,
date:'Oct 23,2024'
} 
  ,
  {  stars:[
   
     
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
  ],
  text:'lorem ipsum dolor sit amet, consectetur , lorem ipsum dolor sit amet, consectetu  lorem ipsum dolor sit amet, consectetur' ,
date:'Oct 23,2024'
} 
  ,
  {  stars:[
   
     
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
  ],
  text:'lorem ipsum dolor sit amet, consectetur , lorem ipsum dolor sit amet, consectetu  lorem ipsum dolor sit amet, consectetur' ,
date:'Oct 23,2024'
} 
  ,
  {  stars:[
   
     
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
  ],
  text:'lorem ipsum dolor sit amet, consectetur , lorem ipsum dolor sit amet, consectetu  lorem ipsum dolor sit amet, consectetur' ,
date:'Oct 23,2024'
} 
  ,
  {  stars:[
   
     
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
    <FaStar className="text-yellow-500" />,
  ],
  text:'lorem ipsum dolor sit amet, consectetur , lorem ipsum dolor sit amet, consectetu  lorem ipsum dolor sit amet, consectetur' ,
date:'Oct 23,2024'
} 
  ,
  


 ]
  return (
    <div className="flex flex-col items-center justify-start  px-4  ">
      <div className="flex w-full max-w-screen-lg justify-between items-center mb-9">
        <h1 className="font-Amaranth max-sm:text-lg sm:text-xl md:text-2xl lg:text-[30px]  font-bold 2xl:text-2xl  text-primary uppercase">Testimonials</h1>
        <div className="flex space-x-2 p-2 z-10">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="p-1 bg-white rounded-full shadow-md  border-2 border-primary"
          >
            <svg
              className="w-5 h-5 text-gray-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="p-1 bg-white rounded-full shadow-md border-2 border-primary"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full  h-[300px] max-w-screen-lg overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
            },

            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {opinions.map((item, index) => (
            <SwiperSlide
              key={index}
              className="shoping-slider w-[200px] "
            >
             <div key={index} className=" transition-all  relative -top-1/3 ">
             <div className="bg-primary py-5 rounded-lg px-3 border-3 shadow-2xl shadow-teal-700">
              <div className="flex justify-start">
               {item.stars.map((star , idx)=>(
                <span className="mb-2 me-2" key={idx}>{star}</span>
               ))}
              </div>
              <p className="line-clamp-4 text-start text-white">
             {item.text}
              </p>
              <p className="text-start  mt-2 "> {item.date} </p>
             </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;



                
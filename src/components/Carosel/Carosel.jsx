import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../Ui/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import the images dynamically
import slide1 from "../../assets/imgs/carousil/slide1.png";
import slide2 from "../../assets/imgs/carousil/slide2.png";

import img1 from '../../assets/imgs/carousil/img1.jfif'
import img2 from '../../assets/imgs/carousil/img2.jfif'
import img3 from '../../assets/imgs/carousil/img3.jfif'
import img4 from '../../assets/imgs/carousil/img4.jfif'

const slidesData = [
  {
    image: slide1,
    title: "HADAYA ACADEMY",
    description:
   "The best online platform for learning Quran and Arabic language Join us now and start the journey of understanding Quran and sunnah" ,
    rightImages: [
      img1,
      img2
    ],
  },
  {
    image: slide2,
    title: "HADAYA ACADEMY",
    description:
    "The best online platform for learning Quran and Arabic language Join us now and start the journey of understanding Quran and sunnah",
    rightImages: [
      img3,
      img4
    ],
  },

 
];

const Carousel = () => {
  return (
    <div className="mb-20">
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction:false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex ">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute cars-titles top-0 lg:w-1/4 lg:left-32 flex lg:items-start md:left-2 sm:left-2 sm:w-full sm:items-center xs:w-full xs:items-center flex-col justify-center items-start h-full w-1/4 px-4">
                <h1 className="text-white pb-8 text-3xl font-bold">
                  {slide.title}
                </h1>
                <p className="  md:text-center sm:text-center lg:text-xl lg:text-start lg:w-full w-1/2 md:text-lg text-wrap text-start pb-10 text-xl text-white">
                  {slide.description}
                </p>
                <Button
                  style={`bg-primary text-white text-2xl w-40 py-2 rounded-3xl hover:bg-[#ffb921] hover:text-white transition duration-[1000ms] ease-in-out`}
                >
                  View More
                </Button>
              </div>
              <div className="absolute img-cars  top-48 right-36 flex flex-row gap-4 lg:flex md:hidden sm:hidden xs:hidden">
                {slide.rightImages.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`w-52 border-[3px] border-primary  me-10 h-[280px] rounded-3xl overflow-hidden ${
                      imgIndex === 1 ? "mt-14" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Right Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

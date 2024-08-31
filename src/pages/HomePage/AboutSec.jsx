import about from "../../assets/imgs/about/about11.png";
const AboutSec = () => {
  return (
    <>
      <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] py-16 w-full flex flex-col sm:flex-col sm:gap-10  max-sm:gap-10 md:gap-28 md:flex-row justify-center items-center pb-40 ">
        <div className="shadow-lg rounded-lg shadow-primary h-96 w-96 sm:h-80 md:h-80 object-contain animate-float">
          <img
            className="h-96 w-96 sm:h-80 md:h-80 object-contain"
            src={about}
          />
        </div>

        <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
        
          <h6 className="text-primary font-bold  about-title max-sm:text-center max-sm:text-2xl uppercase sm:text-center md:text-xl my-4 md:mb-6 md:text-start">
            About the academy
          </h6>
          <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
            Quran academy is an online platform that aims to make learning the
            Quran and Arabic easy for everyone in the world. Our courses are
            presented by native Arabic tutors who hold Ijazah and have decades
            of teaching experience. Our teachers can teach various topics of the
            Quran, Arabic, and Islamic studies. We provide you with a flexible
            and fruitful learning experience.
          </p>
          <h1 className="text-primary font-bold text-2xl ">Our Mission</h1>
          <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
            Quran Academy aims to learn the Quran, and Arabic language and
            understand the Sunnah of our prophet Muhammad peace be upon him to
            all Muslims in the world. We aim to create a professional learning
            environment and make the learning process interesting and enjoyable.
            We provide the students with the best learning experience that grows
            their love of learning the Holy Quran, Arabic Language, and Islamic
            Studies. We have special professional courses for our students.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSec;

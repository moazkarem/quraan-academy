import { Fragment } from "react";
import Title from "../../components/Titlesections/Title";
import img1 from "../../assets/imgs/courses/course1.png";
import img2 from "../../assets/imgs/courses/course2.png";
import img3 from "../../assets/imgs/courses/course3.png";
const CoursesHomesec = () => {
  const courses = [
    {
      img: img1,
      title: "Islamic Studies Course",
      disc: "Let your kids learn all about Islam through the multiple categories we have chosen to teach. They will get to know about Allah, the Prophets, the Quran, Prayers, Supplications, and much more in a very formulated structure.",
      sub: "",
      list: [
        "The age group of every student is considered before shaping their learning plans.",
        "The toddlers will start from the basics and learn about different topics regarding Islam.",
        "This course has 3 levels and the curriculum is covered easily by focusing on each level in detail. There are quizzes, tests, and competitions designed for every level.",
      ],
    },
    {
      img: img2,
      title: "Tajweed online course.",
      disc: "Hadaya Academy has designed this Tajweed online course to help you master the Tajweed rules which is necessary for mistake-free reading of the Quran.",
      sub: "In Hadaya Academy online course, you will learn:",
      list: [
        "Rules of Noon- Sakina and Tanween",
        "Rules of Meem Sakina.",
        "Rules of Noon and Meem Mushadad.",
        "Maad-ul-Mutasil & Maad ul-Munfasil",
        "Maad-ul- Lazim.",
        "Maad-ul- Badal.",
      ],
    },
    {
      img: img3,
      title: "Quran Recitation course.",
      disc: "Quran Recitation must be a daily routine for all Muslims so Quran academy designed this course with special techniques that qualify you to be a professional Reader of the book of Allah. You will have the chance to listen to the Quran daily by our beloved tutors with beautiful tones. The best beginning step to learning the 10 Qirat of the Quran.",
      sub: "What will you learn  ?",
      list: [
        "Reciting each word in the Holy Quran.",
        "Learning the tajweed rules.",
        "The signs in Quran and their meaning.",
      ],
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-start pb-16 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
      <div className="mb-12">
        <Title name={"Our Courses"} />
      </div>

      {courses.map((item, idx) => (
        <Fragment key={idx}>
          {idx % 2 === 0 ? (
            <div className="max-sm:px-[1rem] sm:px-[2.5rem] pb-24 md:px-[3rem] lg:px-[4rem] xl:px-[12rem] w-full flex flex-col sm:flex-col sm:gap-10  max-sm:gap-10 md:gap-28 md:flex-row justify-center items-center  ">
              <div className="h-52 sm:h-80 md:h-80 object-contain rounded-lg animate-float bg-transparent">
                <img
                  className="h-52 sm:h-80 md:h-80 object-contain"
                  src={item.img}
                />
              </div>
              <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
                <h6 className="text-[#BF861B] font-bold  max-sm:text-center max-sm:text-2xl sm:text-center md:text-xl mb-4 md:mb-6 md:text-start">
                  {item.title}
                </h6>
                <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
                  {item.disc}
                </p>

                <div className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
                  <h6 className=" text-[#BF861B] mt-3 font-bold">{item.sub}</h6>
                  {item.list.map((li, idx) => (
                    <ul key={idx} className="pl-5">
                      <li className="list-disc ">{li}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] w-full flex flex-col sm:flex-col sm:gap-10  max-sm:gap-10 md:gap-28 md:flex-row justify-center items-center pb-24">
              <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
                <h6 className="text-primary font-semibold text-lg max-sm:text-center max-sm:text-2xl sm:text-center md:text-xl mb-4 md:mb-6 md:text-start">
                  {item.title}
                </h6>
                <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
                  {item.disc}
                </p>

                <div className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
                  <h6 className="text-[#BF861B] mt-3 font-bold">{item.sub}</h6>
                  {item.list.map((li, idx) => (
                    <ul key={idx} className="pl-5">
                      <li className="list-disc">{li}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="h-52 sm:h-80 md:h-80 object-contain animate-float">
                <img
                  className="h-52 sm:h-80 md:h-80 object-contain"
                  src={item.img}
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default CoursesHomesec;

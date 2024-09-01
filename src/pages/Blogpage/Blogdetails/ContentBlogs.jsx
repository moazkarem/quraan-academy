import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { blogsData } from "../Data";
import Title from "../../../components/Titlesections/Title";

const BlogDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const foundBlog = blogsData.find(
      (course) => course.id === parseInt(id)
    );
    setCourse(foundBlog);
  }, [id]);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-start pb-12 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
      <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-16">
        <Title name={"Single Details"} />
      </div>
      <div className="container flex flex-col lg:flex-row md:flex-row md gap-6 lg:gap-12">

        <div className="flex justify-center items-center flex-col lg:w-1/2">
          <img
            src={course.thumb[active] }
            className="w-3/4  h-[300px] object-cover rounded-lg mb-4 scale-100 hover:scale-110 ease-in duration-300"
            alt={course.title}
          />
          <div className="flex flex-wrap justify-center gap-2">
            {course.thumb.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`w-[70px] h-[70px] border-2 p-[2px] border-primary  object-cover rounded-full cursor-pointer`}
                alt={`Thumbnail ${idx + 1}`}
                onClick={(e) => setActive(+e.target.dataset.index)}
                data-index={idx}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
          <h6 className="text-primary font-bold  about-title max-sm:text-center max-sm:text-2xl uppercase sm:text-center md:text-xl my-4 md:mb-6 md:text-start">
            {course.title}
          </h6>
          <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
            {course.desc}
          </p>
         
        </div>

      </div>
    
    </div>
  );
};

export default BlogDetails;

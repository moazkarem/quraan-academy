import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { coursesData } from "../Data";
import Title from "../../../components/Titlesections/Title";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const foundCourse = coursesData.find(
      (course) => course.id === parseInt(id)
    );
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
      <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-10">
        <Title name={"Single Details"} />
      </div>
      <div className="container flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Large Image */}
        <div className="flex justify-center items-center flex-col lg:w-1/2">
          <img
            src={course.thumb[active] }
            className="w-3/4  h-[300px] object-cover rounded-lg mb-4"
            alt={course.title}
          />
          <div className="flex overflow-x-auto justify-center gap-2">
            {course.thumb.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-[70px] h-[70px] border-2 p-[2px] border-primary  object-cover rounded-full cursor-pointer"
                alt={`Thumbnail ${idx + 1}`}
                onClick={(e) => setActive(+e.target.dataset.index)}
                data-index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

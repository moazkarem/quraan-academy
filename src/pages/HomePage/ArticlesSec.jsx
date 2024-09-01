import Button from "../../Ui/Button";

import Title from "../../components/Titlesections/Title";
import { useNavigate } from "react-router-dom";
import {blogsData} from '../Blogpage/Data'
const ArticlesSec = () => {
  const navigate = useNavigate();
 
  return (
    <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28 ">
      <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-16">
            <Title name={'Some Blogs'} />
          </div>
      <div className="grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-1 max-sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 mb-20">
       {blogsData.slice(0,6).map((item , index)=>(
         <div key={index} className=" h-[400px]">
        <div className="w-8/9 bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16 max-sm:mb-28 relative">
  <figure className="overflow-hidden rounded-xl h-full w-full">
    <img
   
      src={item.img}
      alt={item.title}
      className="object-cover h-full w-full scale-100 group-hover:scale-110 ease-in duration-300"
    />
    <div
     onClick={()=>navigate(`/blogs/${item.id}`)}
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.828 12l-3.535 3.536 1.414 1.414L12.95 12 8.707 7.05l-1.414 1.414L10.828 12zM17 12c0-1.657-1.343-3-3-3h-4V7h4c2.757 0 5 2.243 5 5s-2.243 5-5 5h-4v-2h4c1.657 0 3-1.343 3-3z"></path>
      </svg>
    </div>
  </figure>
  <div className="mt-2 pl-2">
    <p className="text-[#ffb921]">{item.date}</p>
    <span className="text-primary font-bold text-2xl">{item.title}</span>
    <p className="line-clamp-3">{item.desc}</p>
  </div>
</div>

       </div>
       ))}
       
      </div>
      <div className="  text-center w-full">
          <Button onClick={()=>navigate('/blogs')} style="w-36 text-white bg-primary rounded-md py-1">Read More</Button>
        </div>
    </div>
  );
};

export default ArticlesSec;

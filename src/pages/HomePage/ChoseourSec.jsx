
import Title from "../../components/Titlesections/Title";
import img1 from '../../assets/imgs/choseour/img1.png'
import img2 from '../../assets/imgs/choseour/img2.png'
import img3 from '../../assets/imgs/choseour/img3.png'
import img4 from '../../assets/imgs/choseour/img4.png'
import img5 from '../../assets/imgs/choseour/img5.png'
import img6 from '../../assets/imgs/choseour/img6.png'
import img7 from '../../assets/imgs/choseour/img7.png'
import img8 from '../../assets/imgs/choseour/img8.png'


const ChoseourSec = () => {

      const counters = [
        {
          img:img1,
          count: "150",
          title: "Students"
          
        },
        {
        img:img2,
        count: "45",
        title: "Teachers"
        
      },
      {
        img:img3,
        count: "56",
        title: 'Countries'
      },
      {
        img:img4,
        count: "150",
        title: "Students"
        
      },
      {
      img:img5,
      count: "45",
      title: "Teachers"
      
    },
    {
      img:img6,
      count: "56",
      title: 'Countries'
    },
    {
      img:img7,
      count: "150",
      title: "Students"
      
    },
    {
    img:img8,
    count: "45",
    title: "Teachers"
    
  },
 
      
      ]
    
      return (
        <div className=" flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28  ">
          <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-10">
            <Title name={'Why Choose Our'} />
          </div>
          <div className="chose-our rounded-lg bg-[#f2f2f2] p-7 grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-2 max-sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 ">
            
            {counters.slice(0, 8).map((item, index) => (
              <div key={index} className="relative ">
                 
              <div className=" bg-[#400606] border  w-full h-full text-center p-5 py-6 rounded-2xl  flex flex-col gap-3 items-center justify-evenly hover:cursor-pointer transform duration-500 hover:-translate-y-2 cursor-pointer hover:rotate-1">
                <img src={item.img} className='w-20 h-20' />
                <h1 className="text-[#BF861B] font-semibold text-xl">
                Confidence
                </h1>
                <p className=" text-white text-[16px] line-clamp-6" style={{lineHeight:'18px'}}>
                Our online courses are all personalized. To ensure that your time is used effectively, our teachers devote enough time to each student. To give you the most seamless class experience possible, we also use technology, out-of-the-box methodologies, and software for efficient learning.
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      );
}

export default ChoseourSec
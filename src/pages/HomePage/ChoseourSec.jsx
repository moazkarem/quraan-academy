
import Title from "../../components/Titlesections/Title";
const ChoseourSec = () => {
    const images = [
        "https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689591643/productsImageCover/hnek4unavgxlnbpwzudv.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689544377/productsImageCover/grmvowp2xuqhwqpspa4i.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp",
        "https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689591643/productsImageCover/hnek4unavgxlnbpwzudv.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689544377/productsImageCover/grmvowp2xuqhwqpspa4i.webp",
        "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp",
      ];
    
      return (
        <div className=" flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28  ">
          <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-10">
            <Title name={'Why Choose Our'} />
          </div>
          <div className="grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-2 max-sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 ">
            {images.slice(0, 8).map((image, index) => (
              <div
                key={index}
                className=" w-8/9 bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16 max-sm:mb-28 "
              >
                <figure className="overflow-hidden rounded-xl h-full w-full ">
                  <img
                    src={image}
                    alt={`Best Selling ${index}`}
                    className="object-cover h-full w-full  scale-100 group-hover:scale-110 ease-in duration-300"
                    loading="lazy"
                  />
                </figure>
                <div className=" card-body py-3 z-10 rounded-xl bg-white relative bottom-16   shadow-md px-3  w-11/12 mx-auto h-32 max-sm:h-44 max-sm:bottom-24 ">
                  <h2 className="text-lg "> Course Name</h2>
    
                 
                    <p className="text-[12px] text-center" style={{lineHeight:'16px'}}> 
                    You will like our incredibly accommodating 24/7 support and flexible scheduling of any class for any time of day.
                          </p>
               
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ChoseourSec
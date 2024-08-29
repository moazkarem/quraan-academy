import Button from "../../Ui/Button";

const ArticlesSec = () => {
  return (
    <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28 ">
      <div className="grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-1 max-sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 mb-20">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="bg-red-500 h-[400px]">
            <div className="w-8/9   bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16 max-sm:mb-28">
              <figure className="overflow-hidden rounded-xl h-full w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="object-cover h-full w-full  scale-100 group-hover:scale-110 ease-in duration-300"
                />
              </figure>
              <div className="card-body">   
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <div className="  text-center w-full">
          <Button style="w-28 bg-primary rounded-md py-1">Read More</Button>
        </div>
    </div>
  );
};

export default ArticlesSec;

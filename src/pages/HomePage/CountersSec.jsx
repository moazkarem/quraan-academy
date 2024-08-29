import std from '../../assets/imgs/counters/std.png'
import tech from '../../assets/imgs/counters/tech.png'
import Countries from '../../assets/imgs/counters/countrys.png'
import bgcount from '../../assets/imgs/carousil/slide1.png'

 const CountersSec = () => {
  const counters = [
    {
      img:std,
      count: "150",
      title: "Students"
      
    },
    {
    img:tech,
    count: "45",
    title: "Teachers"
    
  },
  {
    img:Countries,
    count: "56",
    title: 'Countries'
  }
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center pb-28 px-4">

      <div className="flex flex-col w-full max-w-screen-lg bg-primary rounded-xl px-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {counters.map((item , index)=>(
            <div key={index} className="relative -top-1/4">
            <div className="  shadow-inner w-full h-full text-center bg-white p-5 py-6 rounded-2xl shadow-base flex flex-col gap-3 items-center justify-evenly">
              <img src={item.img} className='w-20' />
              <h1 className="text-primary font-semibold text-xl">
              +{item.count}
              </h1>
              <p className="text-secondry font-bold text-2xl">
                {item.title}
              </p>
            </div>
          </div>
          ))}
        </div>
        <div className="lg:-mb-20 md:-mb-20 -mb-16 ">
          <img
            src={bgcount}
            alt="service image"
          />
        </div>
      </div>
    </div>
  )
}
export default CountersSec
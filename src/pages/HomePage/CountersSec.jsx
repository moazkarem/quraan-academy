import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import std from '../../assets/imgs/counters/std.png';
import tech from '../../assets/imgs/counters/tech.png';
import Countries from '../../assets/imgs/counters/countrys.png';

const CountersSec = () => {
  const countersData = [
    { img: std, count: 1890, title: 'Students' },
    { img: tech, count: 78, title: 'Teachers' },
    { img: Countries, count: 103, title: 'Countries' },
  ];

  const [counters, setCounters] = useState([0, 0, 0]);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      countersData.forEach((item, index) => {
        let start = 0;
        const end = item.count;
        const increment = end / 100; // Adjust this for speed
        const interval = setInterval(() => {
          start += increment;
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = Math.min(Math.ceil(start), end);
            return newCounters;
          });
          if (start >= end) clearInterval(interval);
        }, 20); // Adjust this for speed
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ inView]);

  return (
    <div className="w-full flex flex-col justify-center items-center pb-28 px-4">
      <div ref={ref} className="flex flex-col w-full max-w-screen-lg bg-primary rounded-xl px-10">
        <div className="grid shadow-2xl shadow-teal-700 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {countersData.map((item, index) => (
            <div key={index} className="transition-all relative -top-1/4">
              <div className=" w-full h-full text-center bg-white p-5 py-6 rounded-2xl  flex flex-col gap-3 items-center justify-evenly">
                <img src={item.img} className="w-20" />
                <h1 className="text-primary font-semibold text-xl">
                  +{counters[index]}
                </h1>
                <p className="text-secondry font-bold text-2xl">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountersSec;

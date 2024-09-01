import Lottie from "lottie-react";
import doneAnimation from "./animation/contact.json";
import Title from "../../components/Titlesections/Title";
const Formsec = () => {
  return (
    <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
      <div className="container mx-auto px-5  lg:px-[40px] xl:px-[100px] mb-[40px]">
      <div className="flex text-start justify-center  max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-20">
            <Title name={'Have A Question? Contact Us'} />
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[0px]">
          <Lottie
            loop={true}
            className="w-full m-auto md:w-3/4 max-w-[100%]"
            animationData={doneAnimation}
          />
          <div className="self-center">
            <form className="flex flex-col gap-3">
              <div className="flex justify-between gap-6">
                <div className="flex w-1/2 flex-col gap-1">
                  <input
                    type="text"
                    className=" order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2 w-full"
                  />
                  <label className="text-primary order-1">Name</label>
                </div>
                <div className="flex w-1/2 flex-col gap-1">
                  <input
                    type="text"
                    className=" order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2 w-full"
                  />
                  <label className="text-primary order-1 ">Email{"  "}*</label>
                </div>
              </div>
              <div className="flex w-[100%] flex-col gap-1">
                <input
                  type="text"
                  className=" order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2 w-full"
                />
                <label className="text-primary order-1">Phone Number *</label>
              </div>
              <div className="flex w-[100%] flex-col gap-1">
                <textarea
                  id="message"
                  name="message"
                  className=" order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2 min-h-[140px]"
                ></textarea>
                <label className="text-primary order-1">Message {""} *</label>
              </div>
              <button
                type="submit"
                className="bg-primary rounded-lg text-white text-[17px] py-[8px] mt-2 w-full md:w-1/2 mx-auto "
              >
                Send Message
              </button>
            </form>
            
          </div>
      
        </div>
        <div className="mt-10">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.732517701552!2d31.176533241156996!3d30.01318558976228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584683f68e2529%3A0x8bcd34391e0ff03f!2z2KfZhNmB2LHYs9in2YYgKDEp!5e0!3m2!1sar!2seg!4v1639144091998!5m2!1sar!2seg"
      className="w-full h-[600px] border-2 rounded-md border-primary"
  
      allowFullScreen=""
      loading="lazy"
    ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Formsec;

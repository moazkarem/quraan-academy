import Lottie from "lottie-react";
import doneAnimation from "./animation/contact.json";
import Title from "../../components/Titlesections/Title";
const Formsec = () => {
  return (
    <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
      <div className="container mx-auto px-5  lg:px-[40px] xl:px-[100px] mb-[40px]">
      <div className="flex text-start justify-center  max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-20">
            <Title name={'Have Question? Contact Us'} />
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
      </div>
    </div>
  );
};

export default Formsec;

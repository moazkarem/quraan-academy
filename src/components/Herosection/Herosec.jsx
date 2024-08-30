

const Herosec = ({bg , title}) => {
  return (
    <div>
    <div className="relative">
      <img
        src={bg}
        className="w-full h-[60vh] lg:h-[50vh]"
        alt="hero about section"
        style={{ opacity: 1 }}
      />
      <div className="bg-gray-600/30 backdrop-brightness-75 absolute inset-0 flex flex-col justify-center items-center">
        <h4 className="text-primary font-semibold text-xl md:text-4xl mb-4 md:mb-6">
         {title}
        </h4>
        <div className="text-white font-inter text-sm md:text-lg">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a
                href="/"
                className="text-white hover:text-white flex items-start gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#ffb921]">{title}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Herosec
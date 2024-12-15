import image from "../assets/images/Video game developer.gif";
import { Link } from "react-router";
const Body = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-2 mt-4  px-4 pt-10 lg:px-12 overflow-hidden">
      <div className="flex flex-col  lg:items-start items-center">
        <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-semibold  md:leading-[5rem] text-center lg:text-left">
          From Zero to super
          <span className=" animated-text">Cracked</span>Dev 
        </h1>
          <p className="mt-[20px] text-gray-600 italic text-[.9rem] sm:text-[.8rem]  md:text-left text-center sm:w-[100%]">
            &apos;&apos;Anyone with a laptop and internet connection can be
            cracked&apos;&apos;- skai
          </p>
        <Link to="/career">
          <button className="border-2 px-8  py-3 rounded-[0.5em]  mt-[30px] bg-black text-white hover:bg-[#7E57C2] flex text-[.7rem] sm:text-[.8rem] outline-none border-none">
            <p className="">Start Cracking</p>
          </button>
        </Link>
      </div>
      <img src={image} className="w-[250px] h-[250px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px]  lg:block" />
    </div>
  );
};

export default Body;

import image from "../assets/images/Video game developer.gif";
import { Link } from "react-router";
const Body = () => {
  return (
    <div className="flex justify-between items-center gap-2  px-4 pt-10 lg:px-12">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-semibold  md:leading-[5rem] text-center lg:text-left">
          Zero to super
          <span className=" animated-text">Cracked</span>Dev For
          Beginners
        </h1>
          <p className="mt-[20px] text-gray-600 italic text-[.8rem] text-center md:text-left">
            &apos;&apos;Anyone with a laptop and internet connection can be
            cracked&apos;&apos;- skai
          </p>
        <Link to="/career">
          <button className="border-2 px-6  py-4 rounded-[0.5em]  mt-[30px] bg-black text-white hover:bg-[#7E57C2] flex">
            <p className="">Start Cracking</p>
          </button>
        </Link>
      </div>
      <img src={image} className="h-[500px] w-[500px] hidden lg:block" />
    </div>
  );
};

export default Body;

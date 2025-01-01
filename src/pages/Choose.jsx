import cat from "../assets/images/cat.jpeg";
import web3 from "../assets/images/web3.jpeg";
import { Link } from "react-router";

const Choose = () => {
  return (
    <div className="flex flex-col px-4 items-center justify-center  h-[90svh] gap-6">
      <h2 className="text-[1.5rem] md:text-[2.4rem] font-bold">
        Your <span className="animated-text">journey</span> starts now
      </h2>
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-8 lg:w-[800px] ">
        <Link to="/update" className="group relative ">
          <div className="border-2 relative rounded-md  boxShadow  transition-all duration-300   bg-white p-4 gap-y-[21px] flex gap-2 flex-col h-[200px]">
            <img src={cat} className="w-[50px] h-[50px] rounded-full" />
            <p className="font-bold text-[#7e57c2] text-[1.1rem]">
              The World Wide Web
            </p>

            <p className="text-[.8rem] text-black ">
              Master Essential Skills to Dominate the Web2 World
            </p>
          </div>
        </Link>

        <Link to="/web3" className="group relative ">
          <div className="border-2 relative rounded-md  boxShadow transition-all duration-300   bg-white p-4 gap-y-[21px] flex gap-2 flex-col h-[200px]">
            <img src={web3} className="w-[50px] h-[50px] rounded-full" />
            <p className="font-bold text-[#7e57c2] text-[1.1rem]">
              The World of Web 3
            </p>

            {/* <span className="absolute top-2 left-2 bg-[#7E57C2] text-white px-4 py-1 text-sm rounded-sm z-40">
                      New
                    </span> */}
            {/* Career Name */}
            <p className="text-[.8rem]  text-black">
              Unlock the Skills to Thrive in the Web3 Revolution
            </p>

            {/* <img
                      src={c.image}
                      alt={c.career}
                      className="w-full h-[100%] sm:h-[100%] object-cover transform transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Choose;
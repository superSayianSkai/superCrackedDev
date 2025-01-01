import { web2 } from "../Data.js/Career";
import Footer from "../components/Footer";
import { Fields } from "../Data.js/FIelds";
import Header from "../components/Header";
import { Link } from "react-router";
import { FullstackProjectsStack } from "../Data.js/FullstackProjectsStack";
const FullstackProjectsIntro = () => {
  return (
    <div>
      <div className={`flex flex-col items-center px-4 my-[20px] `}>
        <div className="flex flex-col gap-6 mt-[40px]">
          <h2 className="text-center text-[1.5rem] sm:text-[2.4rem] font-bold mt-[80px] ">
            Build a <span className="animated-text">side</span> and go pro
          </h2>
        </div>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2  gap-x-6 gap-y-8 lg:w-[800px]">
          {FullstackProjectsStack.map((c, index) => (
            <Link key={index} to={c.link} className="group relative ">
              <div className="border-2 relative rounded-md   boxShadow  transition-all duration-300   bg-white p-4  flex gap-2 flex-col h-[180px]">
                <div className="flex items-center gap-2">
                  <h2 className="text-[1rem] md:text-[1.5rem] text-[#7E57C2]  font-bold">
                    {c.stack}
                  </h2>
                </div>

                <p className="font-bold text-[#7e57c2] text-[.8rem] md:text-[1.1rem]">
                  {" "}
                  {c.fields}
                </p>

                {/* <span className="absolute top-2 left-2 bg-[#7E57C2] text-white px-4 py-1 text-sm rounded-sm z-40">
                New
              </span> */}

                <p className="text-[.8rem] text-black">{c.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullstackProjectsIntro;

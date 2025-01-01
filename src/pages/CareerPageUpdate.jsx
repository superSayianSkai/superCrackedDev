import { useContext } from "react";
import { web2 } from "../Data.js/Career";
import AppContext from "../context/AppContext"; // Use named or default based on your context export
import { Link } from "react-router";

const CareerPageUpdate = () => {
  const { setType, type } = useContext(AppContext);
  console.log(type);

  return (
    <div>
      <div className="flex flex-col items-center p-4 my-[20px]">
        <div className="min-h-[70svh]">
          <div className="flex flex-col gap-6 mt-[40px]">
            <h2 className="text-center text-[1.5rem] sm:text-[2.4rem] font-bold md:mt-[80px]">
              Kick start your <span className="animated-text">Journey</span>
            </h2>
          </div>
          <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:w-[900px]">
            {web2.map((c, index) => (
              <Link
                key={index}
                to={c.link}
                onClick={() => setType(c.type)}
                className="group relative"
              >
                <div className="border-2 relative rounded-md  boxShadow transition-all duration-300 bg-white p-4 flex gap-y-[21px] gap-2 flex-col h-[200px]">
                  <img src={c.image} alt="" className="w-[30px] h-[30px]" />
                  <p className="font-bold text-[#7e57c2] text-[1.1rem]">
                    {c.career}
                  </p>
                  <p className="text-[.8rem] text-black">{c.info}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPageUpdate;

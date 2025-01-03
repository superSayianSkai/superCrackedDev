import { Fields } from "../Data.js/FIelds";
import { Link } from "react-router";
const CareerPageUpdate = () => {
  return (
    <div>
      <div className={`flex flex-col items-center px-4  `}>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-center text-[1.5rem] sm:text-[2.4rem] font-bold  ">
            Pick a <span className="animated-text">lanaguage </span>
          </h2>
        </div>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2  gap-x-6 gap-y-8 lg:w-[800px]">
          {Fields.map((c, index) => (
            <Link key={index} to={c.links} className="group relative ">
              <div className="border-2 relative rounded-md   boxShadow   transition-all duration-300   bg-white p-4 gap-y-[21px] flex gap-2 flex-col h-[200px]">
                <img src={c.icon} className="w-[30px] h-[30px] " />
                <p className="font-bold text-[#7e57c2] text-[1.1rem]">
                  {" "}
                  {c.fields}
                </p>
                <p className="text-[.8rem] text-black">{c.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPageUpdate;

import { Frontend } from "../Data.js/stack";
import fullstack from "../assets/images/fullstack.gif";
const FrontendPage = () => {
  return (
    <div className=" mx-auto md:w-[800px] min-h-[100vh] pt-[15rem] mb-20">
      <div className="absolute top-0 left-0  w-[100%] h-[200px]"><img src={fullstack}   loading="lazy" className="w-[100%] h-[100%] object-cover"/></div>
      {Frontend.map((items, index) => (
        <div
          key={index}
          className="border-[1px]  border-black border-t-0 border-r-0 border-l-0 flex flex-col  pb-[2rem] mx-8 my-8 cursor-pointer"
        >
          <h2 className="font-bold my-[30px] text-[1rem]  md:text-[1.5rem]  text-[#7E57C2] ">
            {items.week}: {items.weekGoal}
          </h2>
          <ul className="list-disc mx-6  flex flex-col gap-6 text-[.8rem] md:text-[1rem] text-gray-800 ">
            {items.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
              
                className=""

              >
                <li className="hover:bg-[#f7def7] rounded-lg p-2">{resource.resource}</li>
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FrontendPage;

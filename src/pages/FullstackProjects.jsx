import { fullstackProjects } from "../Data.js/stack";

import fullstack from "../assets/images/fullstack.gif";
const FullstackProjects = () => {
  return (
    <div className=" mx-auto md:w-[800px] min-h-[100vh] pt-[15rem] mb-20">
      <div className="absolute top-0 left-0  w-[100%] h-[200px]">
        <img src={fullstack} className="w-[100%] h-[100%] object-cover" />
      </div>

      <h2 className="font-bold my-[30px] text-[1rem]  md:text-[1.5rem]  text-[#7E57C2]  mx-8  ">
        Fullstack Projects
      </h2>
      {fullstackProjects.map((items, index) => (
        <ul
          key={index}
          className="list-disc  flex flex-col gap-10 text-[.8rem] md:text-[1rem] text-gray-800 cursor-pointer mx-20 my-8 "
        >
          <a key={index} href={items.links} target="_blank" className="">
            <li className="hover:bg-[#f7def7] rounded-lg p-2 mb-5">
              {items.resource}
            </li>
          </a>
        </ul>
      ))}
    </div>
  );
};

export default FullstackProjects;

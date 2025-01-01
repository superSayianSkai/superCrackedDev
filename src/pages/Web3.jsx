import sab from "../assets/images/sab.jpg";
import { WEB3 } from "../Data.js/stack";
import web3Pic from "../assets/images/web3.gif";
const Web3 = () => {
  return (
    <div className=" mx-auto md:w-[800px] min-h-[100vh] pt-[15rem] mb-20">
      <div className="absolute top-0 left-0  w-[100%] h-[200px]">
        <img
          src={web3Pic}
          loading="lazy"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* <div className="absolute right-[30px] bg-gray-300 border-2 border-gray-500 rounded-xl p-2 w-[200px]">
        <h2 className="text-[.8rem] ">Contributors</h2>
        <div></div>
        <img src={sab} className="w-[30px] h-[30px] rounded-full  " />
      </div> */}
      {WEB3.map((items, index) => (
        <div
          key={index}
          className="border-[1px]  border-black border-t-0 border-r-0 border-l-0 flex flex-col  pb-[2rem] mx-8 my-8 cursor-pointer"
        >
          <h2 className="font-bold my-[30px] text-[1.4rem]  md:text-[1.5rem]  text-[#7E57C2] ">
            {items.week}: {items.weekGoal}
          </h2>
          <ul className="list-disc mx-6  flex flex-col gap-6 text-[1rem]  ">
            {items.resources.map((resource, index) => (
              <a key={index} href={resource.link} className="">
                <li className="hover:bg-[#f1d9f1c4] rounded-lg p-2">
                  {resource.resource}
                </li>
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Web3;

import { ContributorData } from "../Data.js/ContributorsData";
const Contributors = ({ setTheContributorModal }) => {
  return (
    <div className=" absolute mx-auto inset-0 flex items-center justify-center h-[100vh]">
      <div className="backgroundColor w-[100%]  h-[100vh] z-[30000]  text-black md:p-4 justify-center items-center gap-10 flex flex-col ">
        <h2 className="font-bold text-4xl text-center theText-color mt-20 md:mt-0 ">
          Contributors
        </h2>

        <i
          onClick={setTheContributorModal}
          className="bi bi-x-lg  absolute right-8 top-8 cursor-pointer text-2xl theText-color"
        ></i>
        <div className="justify-center  scroll  gap-8  overflow-scroll overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:py-5 px-2 md:px-2 py-4">
          {ContributorData.map((contributor, index) => (
            <div
              key={index}
              className="py-4 px-4 rounded-md bg-white w-[320px] sm:w-[300px] lg:w-[320px] flex flex-col   gap-3  boxShadow "
            >
              <div className="flex justify-between">
                <img
                  src={contributor.img}
                  className="w-[50px] h-[50px] rounded-full "
                />
                <a href={contributor.link} target="_blank">
                  <button className="rounded-md  border-black py-2 px-4 text-[.7rem] md:text-[.8rem] italic bg-black text-white hover:opacity-70 flex gap-2 ">
                    <span className="">Follow on X</span>
                  </button>
                </a>
              </div>
              <div className="flex flex-col mt-1 gap-2">
                <div className="text-[1.2rem]">{contributor.name}</div>
                <div className="text-[.6rem]">@{contributor.userName}</div>
                <div className=" font-bold flex  gap-2 flex-col">
                  <p className="text-[.8rem] font-bold  text-[#7E57C2]">
                    {contributor.contribution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributors;

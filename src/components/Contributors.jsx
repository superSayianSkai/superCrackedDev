import { useEffect, useRef } from "react";
import { ContributorData } from "../Data.js/ContributorsData";

const Contributors = ({ setTheContributorModal }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (closeButtonRef.current) closeButtonRef.current.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setTheContributorModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setTheContributorModal]);

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="absolute inset-0 flex  justify-center h-[100svh]"
    >
      {/* Backdrop */}
      <div
        onClick={() => setTheContributorModal(false)}
        className="absolute inset-0 bg-black bg-opacity-50"
      />
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="backgroundColor w-[100%] z-[30000] text-black md:p-4 justify-center gap-10 flex flex-col"
      >
        <h2
          id="modal-title"
          className="font-bold text-4xl text-center theText-color mt-20 sm:mt-20 md:mt-0"
        >
          Contributors
        </h2>
        <i
          ref={closeButtonRef}
          tabIndex={0}
          onClick={() => setTheContributorModal(false)}
          className="bi bi-x-lg absolute right-8 top-8 cursor-pointer text-2xl theText-color"
        ></i>
        <div
          id="modal-description"
          className="justify-center mx-auto scroll gap-8 overflow-scroll overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:py-5 md:px-2 py-4 w-[90%]"
        >
          {ContributorData.map((contributor, index) => (
            <div
              key={index}
              className="py-4 px-4 rounded-md bg-white w-[320px] sm:w-[300px] lg:w-[320px] flex flex-col gap-3 boxShadow mx-auto"
            >
              <div className="flex justify-between">
                <img
                  src={contributor.img}
                  alt={contributor.name}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <a
                  href={contributor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-md border-black py-2 px-4 text-[.7rem] md:text-[.8rem] italic bg-black text-white hover:opacity-70 flex gap-2">
                    <span>Follow on X</span>
                  </button>
                </a>
              </div>
              <div className="flex flex-col mt-1 gap-2">
                <div className="text-[1.2rem]">{contributor.name}</div>
                <div className="text-[.6rem]">@{contributor.userName}</div>
                <div className="font-bold flex gap-2 flex-col">
                  <p className="text-[.8rem] font-bold text-[#7E57C2]">
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

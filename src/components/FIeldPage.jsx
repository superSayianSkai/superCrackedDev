import fullstack from "../assets/images/fullstack.gif";
import { useEffect, useState } from "react";
import ScrollIndicator from "./ScrollIndicator"; // Import the ScrollIndicator component

const FieldPage = ({ stackData }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById("fullstack-image");
      const imageHeight = imageElement ? imageElement.offsetHeight : 0;
      const scrollPosition = window.scrollY;

      console.log(
        "Scroll Position: ",
        scrollPosition,
        "Image Height: ",
        imageHeight
      );

      if (scrollPosition > imageHeight) {
        setShowScrollIndicator(true);
      } else {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[100vh] pt-[15rem] mb-20">
      <a href="mailto:supercrackeddev@gmail.com">
        <p className="text-[.7rem] absolute right-4 hover:underline cursor-pointer top-[210px] sm:top-[220px]">
          Give Feedback?
        </p>
      </a>
      {showScrollIndicator && <ScrollIndicator />}

      <div className="absolute top-0 left-0 w-[100%] h-[200px]">
        <img
          id="fullstack-image"
          src={fullstack}
          loading="lazy"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <div className="md:w-[800px] mx-auto">
        {stackData.map((items, index) => (
          <div
            key={index}
            className="border-[1px] border-black border-t-0 border-r-0 border-l-0 flex flex-col pb-[2rem] mx-8 my-8 cursor-pointer"
          >
            <div className="flex flex-col">
              <h2 className="font-bold  text-[1.4rem] md:text-[1.5rem] text-[#7E57C2]">
                {items.week}: {items.weekGoal}
              </h2>
              <p className="text-[.8rem] mb-[30px] italic opacity-55">
                **Click the topics!**
              </p>
            </div>
            <ul className="list-disc mx-6 flex flex-col gap-6 text-[1rem] ">
              {items.resources.map((resource, index) => (
                <a key={index} href={resource.link} className="">
                  <li className="hover:bg-[#f1d9f1c4] rounded-lg p-2 ">
                    {resource.resource}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldPage;

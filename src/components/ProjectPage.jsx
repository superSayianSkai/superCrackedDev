import fullstack from "../assets/images/fullstack.gif";
import { useEffect, useState } from "react";
import ScrollIndicator from "./ScrollIndicator"; // Import the ScrollIndicator component

export const ProjectPage = ({ stackData }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Effect to track scroll position and set state accordingly
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
      ); // Debugging

      // Show the scroll indicator if scrolled past the image
      if (scrollPosition > imageHeight) {
        setShowScrollIndicator(true);
      } else {
        setShowScrollIndicator(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:mx-auto md:w-[900px] min-h-[100vh] pt-[15rem] mb-20">
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
      <div className="flex flex-col mx-10">
        <h2 className="font-bold  text-[1.4rem] md:text-[1.5rem] text-[#7E57C2] ">
          FullStack Projects ({stackData.length})
        </h2>

        <p className="text-[.8rem] mb-[30px] italic opacity-55">
          **Click the Projects!**
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {stackData.map((item, index) => (
          <ul
            key={index}
            className="list-disc flex flex-col gap-10 text-[1rem] cursor-pointer mx-20 my-8"
          >
            <a href={item.link}>
              <li className="hover:bg-[#f7def7] rounded-lg p-2 mb-5">
                {item.resource}
              </li>
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

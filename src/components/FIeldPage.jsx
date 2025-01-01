import fullstack from "../assets/images/fullstack.gif";
import { useEffect,useState } from "react";
import ScrollIndicator from "./ScrollIndicator"; // Import the ScrollIndicator component

const FieldPage = ({ stackData }) => {
  // State to track if the image has been scrolled past
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
    <div className="relative min-h-[100vh] pt-[15rem] mb-20">
      {/* Conditionally render the Scroll Indicator */}
      {showScrollIndicator && <ScrollIndicator />}

      {/* Background Image */}
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
            <h2 className="font-bold my-[30px] text-[1.4rem] md:text-[1.5rem] text-[#7E57C2]">
              {items.week}: {items.weekGoal}
            </h2>
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

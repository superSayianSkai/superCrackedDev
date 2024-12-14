import { Career } from "../Data.js/Career";
import { useState } from "react";

const CarrierPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-[100vh]  flex flex-col gap-10 justify-center items-center px-4 `}
    >
      <h2 className="text-center text-[1.5rem] sm:text-[2rem] font-bold mt-[80px]">
        Kickstart your Journey!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {Career.map((c, index) => (
          <a key={index} href={c.link} className="group relative">
            <div className="rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300  h-[300px]">
              <span className="absolute top-2 left-2 bg-[#7E57C2] text-white px-4 py-1 text-sm rounded-sm z-40">
                New
              </span>
              {/* Career Name */}
              <p className="absolute bottom-4 left-4 text-[1rem] sm:text-[1.2rem] font-bold text-white z-30 group-hover:text-[#7E57C2] transition-colors">
                {c.career}
              </p>

              {/* Image */}
              <img
                src={c.image}
                alt={c.career}
                className="w-full h-[100%] sm:h-[100%] object-cover transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 z-20 transition-opacity"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CarrierPage;

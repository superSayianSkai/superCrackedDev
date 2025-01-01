import naruto from "../assets/images/naturo-removebg-preview.png";
import anime from "../assets/images/animeGroup.jpeg";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const HomePage = ({ toggleTheme }) => {
  const [openModal, setOpenModal] = useState(false);

  const [theme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOpenModal(false);
    }, 600);
    return () => clearTimeout(timeOut);
  }, [openModal]);

  const setTheOpenModel = () => {
    setOpenModal((prev) => !prev);
    setTimeout(() => {
      toggleTheme();
    }, 450);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col gap-40 md:gap-0 px-2 overflow-hidden">
        <div className="flex justify-between px-2 md:px-10 mt-20 flex-col md:flex-row items-center md:items-start gap-20 md:gap-0 overflow-hidden">
          <div className="flex flex-col items-center md:items-start gap-4 overflow-hidden">
            <h1 className="text-[2.2rem] md:text-left sm:text-[3.8rem] md:text-[3rem] lg:text-[4.5rem] font-semibold md:leading-[5rem] lg:leading-[7rem] lg:text-left uppercase select-none text-center ">
              From Zero to super
              <span className="animated-text">Cracked</span>Dev
            </h1>
            <p className="text-[.8rem] text-center md:hidden">
              &apos;&apos;Anyone with a laptop and internet connection can be
              cracked&apos;&apos;- skai
            </p>
            <p className="text-[.8rem] uppercase hidden md:block">
              Unleash your potential like Naruto, believe in yourself and
              surpass every limit!
            </p>
          </div>
     
          <div
            onClick={setTheOpenModel}
            className="md:absolute left-[50%] translate-X-1/2 translate-Y-1/2 md:top-[42%] w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-md text-[2rem] text-[white] bg-[#7E57C2] active:bg-black md:hover:bg-black cursor-pointer z-[1000] "
          >
            <i className="bi bi-lightning-charge"></i>
          </div>
          <p className="text-[1.8rem] text-center md:hidden">
            Unleash your potential like Naruto, believe in yourself and surpass
            every limit!
          </p>
          <div className="border-2 border-black flex relative rounded-tl-[30%] rounded-bl-xl rounded-br-xl rounded-tr-xl overflow-hidden bg-slate-100 w-[340px] md:w-[450px] h-[400px] ">
            <img
              src={naruto}
              className="w-[100%] h-[100%] object-contain mr-[-8px]"
            />
            <div className="border-l-[1px] border-black w-[15%] h-[100%] bg-[#7E57C2] text-white absolute right-0 flex py-2 flex-col justify-between items-center">
              <div className="flex flex-col">
                <i className="bi bi-asterisk text-sm"></i>
                <i className="bi bi-asterisk text-sm"></i>
              </div>
              <i className="bi bi-arrow-up text-2xl"></i>
            </div>
          </div>
        </div>
        <p className="text-[1.7rem] text-center md:hidden">
          Dedicate yourself to growth, and others will witness your
          transformation.
        </p>
        <div className="px-2 md:px-8 mb-24 flex justify-between items-end flex-col md:flex-row gap-10 mt-">
          <div className="w-[100%] md:w-[80%] h-[300px] mt-[-40px] border-black border-[2px] overflow-clip rounded-tl-3xl rounded-bl-[40%] rounded-br-3xl rounded-tr-2xl relative">
            <img src={anime} className="object-cover w-[100%] h-[100%]" />
            <div className="w-[200px] h-[200px] bg-yellow-200 absolute right-0"></div>
          </div>
          <div className="md:w-[80%] rounded-xl flex flex-col gap-8 justify-between select-none mt-[40px] ">
            <h1 className="font-bold text-[2rem] md:text-[2rem] uppercase w-[70] block md:hidden">
              Curated free resources to level up your journey!
            </h1>
            <p className="text-[1.7rem] hidden md:block uppercase">
              Dedicate yourself to growth, and others will witness your
              transformation.
            </p>
            <p className="text-[.8rem] hidden md:block">
              &apos;&apos;Anyone with a PC and internet connection can be
              cracked&apos;&apos; - skai
            </p>
            <Link to="/choose">
              <button className="border-2 self-start px-6 py-3 rounded-[0.5em] text-white hover:bg-[#7E57C2] flex text-[.7rem] outline-none border-none button-color">
                Start Cracking
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col ">
        <h1 className="font-bold text-[2rem] md:text-[1.4rem] uppercase hidden md:block">
          Curated free resources to level up your journey!
        </h1>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default HomePage;

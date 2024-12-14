import skai from "../assets/images/skai.jpeg";
const Footer = () => {
  return (
    <div className="border-[1px] border-gray-500 px-4 flex items-center md:px-12 justify-center  h-[15vh] border-r-0 border-l-0">
      <div className="flex justify-between items-center gap-2">
        <p className="text-[.8rem] text-gray-600">Made by Skai. All right Reserved</p>
      </div>
        <div className="flex justify-center items-center">
          {/* <img src={skai} className="w-[25px] h-[25px] rounded-full" /> */}
          {/* <p className="text-[.8rem]">Follow me on X</p> */}
        </div>
    </div>
  );
};

export default Footer;

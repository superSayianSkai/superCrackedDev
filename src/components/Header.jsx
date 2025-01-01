import { Link } from "react-router"
const Header = ({ setTheContributorModal }) => {
  return (
    <div className="flex justify-between items-center  px-4 py-3 md:px-12 a border-t-0 border-r-0  border-l-0  z-[-1]">
      <Link to={"/"}>
        <h2 className="md:text-[1rem] font-sans font-extrabold  cursor-pointer">
          superCrackedDev
        </h2>
      </Link>
      {/* <a href="https://x.com/superSaiyanSkai" target="_blank"> */}
      <button
        onClick={setTheContributorModal}
        className="rounded-md border-[1px] border-black py-1 px-4 text-[.7rem] md:text-[.8rem] italic button-color text-white hover:opacity-70 flex gap-2"
      >
        <i className="bi bi-star "></i>
        <span className="hidden sm:block">Contributors</span>
      </button>
      {/* </a> */}
    </div>
  );
};

export default Header;

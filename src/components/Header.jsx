const Header = () => {
  return (
    <div className="flex justify-between items-center  px-4 py-3 md:px-12 border-[1px] border-gray-400 border-t-0 border-r-0  border-l-0">
      <h2 className="md:text-[1rem] font-sans font-extrabold ">
        superCrackedDev
      </h2>
      <a href="https://x.com/superSaiyanSkai" target="_blank">
        <button className="rounded-md border-[1px] border-black py-2 px-4  text-[.8rem] italic bg-black text-white hover:opacity-70">
          Follow me on x
        </button>
      </a>
      {/* <button onClick={toggleDarkMode}>
        <i className="bi bi-sun"></i>
      </button> */}
    </div>
  );
};

export default Header;

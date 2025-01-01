import { Link } from "react-router";
const Header = ({ setTheContributorModal }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 md:px-12">
      <Link to="/">
        <h2 className="cursor-pointer">superCrackedDev</h2>
      </Link>
      <button
        onClick={() => setTheContributorModal()} // Ensure the function is called here
        className="rounded-md border-[1px] backgroundColor2 hover:opacity-60 py-1 px-4  "
      >
        Contributors
      </button>
    </div>
  );
};

export default Header;

import { Outlet } from "react-router";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import Contributors from "../components/Contributors";
import { useContext } from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

export const Layout = () => {
  const { pathname } = useLocation();
  const { contributorModal, setTheContributorModal } = useContext(AppContext);

  return (
    <div
      className={`relative min-h-[100svh] flex flex-col justify-between ${
        contributorModal ? "h-[70vh] overflow-hidden" : ""
      }`}
    >
      {(pathname === "/" ||
        pathname === "/choose" ||
        pathname === "/journey" ||
        pathname === "/backendIntro" ||
        pathname === "/projectsIntro") && (
        <Header setTheContributorModal={setTheContributorModal} />
      )}

      <Outlet />

      {contributorModal && (
        <Contributors setTheContributorModal={setTheContributorModal} />
      )}

      {pathname === "/" && <Footer />}
      {(pathname === "/choose" ||
        pathname === "/journey" ||
        pathname === "/backendIntro" ||
        pathname === "/projectsIntro") && (
        <p className="text-center italic mb-8">Topics are clickable!</p>
      )}
    </div>
  );
};

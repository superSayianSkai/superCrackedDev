import { Outlet } from "react-router";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import Contributors from "../components/Contributors";
import { useContext } from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

export const Layout = () => {
  const { pathname } = useLocation(); // Destructure to directly get pathname
  const { contributorModal, setTheContributorModal } = useContext(AppContext);

  return (
    <div
      className={`relative h-[100svh] ${
        contributorModal ? "overflow-hidden" : ""
      }`} 
    >
      {(pathname === "/" ||
        pathname === "/choose" ||
        pathname === "/update" ||
        pathname === "/backendIntro" ||
        pathname === "/projectsIntro") && (
        <Header setTheContributorModal={setTheContributorModal} />
      )}
      <Outlet />
      {contributorModal && (
        <Contributors setTheContributorModal={setTheContributorModal} />
      )}
      {pathname === "/" && <Footer />}
    </div>
  );
};

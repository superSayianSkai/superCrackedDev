import { createContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [contributorModal, setContributorModal] = useState(false);
  const setTheContributorModal = () => {
    setContributorModal((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{ type, setType, contributorModal, setTheContributorModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

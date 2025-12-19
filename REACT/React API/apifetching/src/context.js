//context creation
//Provider
//consumer  removed by useContext Hook
// useContext Hook
import React, { useContext } from "react";

// COntext Creation
const AppContext = React.createContext();

//COntext Provider

const AppProvider = ({ Children }) => {
  return (
      <AppContext.Provider value={"Dipesh Mate"}>
          {Children}
      </AppContext.Provider>
  );
};

//creating custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext,useGlobalContext };

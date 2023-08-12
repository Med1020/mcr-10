import React, { createContext, useReducer } from "react";
import DataReducer from "../Reducer/DataReducer";
import { inventoryData } from "../Data";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(DataReducer, inventoryData);

  return (
    <DataContext.Provider value={{ data, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

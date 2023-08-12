import React, { createContext, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filters, filterDispatch] = useReducer(FilterReducer, {
    department: "All Departments",
    stock: false,
    sortBy: "Name",
  });
  return (
    <FilterContext.Provider value={{ filters, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

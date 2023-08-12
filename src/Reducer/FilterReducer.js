import React from "react";

const FilterReducer = (filters, action) => {
  switch (action.type) {
    case "DEPARTMENT":
      return { ...filters, department: action.payload };

    case "STOCK":
      return { ...filters, stock: action.payload };

    case "SORT":
      return { ...filters, sortBy: action.payload };

    default:
      return { ...filters };
  }
};

export default FilterReducer;

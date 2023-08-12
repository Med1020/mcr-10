import React from "react";

const DataReducer = (data, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      localStorage.setItem("item", JSON.stringify([...data, action.payload]));
      return [...data, action.payload];
    }

    default: {
      return [...data];
    }
  }
};

export default DataReducer;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./Context/DataContext";
import FilterContextProvider from "./Context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <FilterContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

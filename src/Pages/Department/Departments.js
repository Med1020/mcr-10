import React, { useContext } from "react";
import "./Departments.css";
import { Link, useNavigate } from "react-router-dom";

import { FilterContext } from "../../Context/FilterContext";

const Departments = () => {
  const { filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();
  const handleDepartmentSelect = (e) => {
    filterDispatch({ type: "DEPARTMENT", payload: e.target.value });
    navigate("/products");
  };
  return (
    <div className="departments-page">
      <div className="department-card">
        <button
          value="Kitchen"
          className="department"
          onClick={handleDepartmentSelect}
        >
          Kitchen
        </button>
      </div>
      <div className="department-card">
        <button
          value="Clothing"
          className="department"
          onClick={handleDepartmentSelect}
        >
          Clothing
        </button>
      </div>
      <div className="department-card">
        <button
          value="Toys"
          className="department"
          onClick={handleDepartmentSelect}
        >
          Toys
        </button>
      </div>
    </div>
  );
};

export default Departments;

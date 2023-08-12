import React, { useContext } from "react";
import "./LandingPage.css";
import { DataContext } from "../../Context/DataContext";
import "./LandingPage.css";

const LandingPage = () => {
  const { data } = useContext(DataContext);
  const totalStock = data.reduce(
    (acc, curVal) => (acc += curVal.stock),
    data[0].stock
  );
  const totalDelivered = data.reduce(
    (acc, curVal) => (acc += curVal.delivered),
    data[0].delivered
  );
  const lowStock = data.reduce(
    (acc, curVal) => (curVal.stock <= 10 ? (acc += 1) : acc),
    0
  );
  return (
    <div className="landing-page">
      <div className="total items">
        <span className="count">{totalStock}</span>
        <div>Total Stock</div>
      </div>
      <div className="delivered items">
        <span className="count">{totalDelivered}</span>
        <div>Total Delivered</div>
      </div>
      <div className="lowstock items">
        <span className="count">{lowStock}</span>
        <div>Low Stock Items</div>
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { DataContext } from "../../Context/DataContext";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/FilterContext";

const Products = () => {
  const { data } = useContext(DataContext);
  const { filters, filterDispatch } = useContext(FilterContext);
  const [filteredData, setFilteredData] = useState(data);

  const changeDepartment = (e) => {
    filterDispatch({ type: "DEPARTMENT", payload: e.target.value });
  };

  const changeLowStock = (e) => {
    filterDispatch({ type: "STOCK", payload: e.target.checked });
  };

  const changeSort = (e) => {
    filterDispatch({ type: "SORT", payload: e.target.value });
  };

  const filterByDept = (displayData) => {
    return filters.department === "All Departments"
      ? displayData
      : displayData.filter(
          ({ department }) => department === filters.department
        );
  };

  const filterByStock = (displayData) => {
    return filters.stock
      ? displayData.filter(({ stock }) => stock <= 10)
      : displayData;
  };

  const SortByField = (displayData) => {
    if (filters.sortBy === "Name") {
      return displayData.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (filters.sortBy === "Price") {
      return displayData.sort((a, b) => a.price - b.price);
    } else {
      return displayData.sort((a, b) => a.stock - b.stock);
    }
  };

  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("item"));
    let result = filterByDept(localStorageData);
    result = filterByStock(result);
    result = SortByField(result);
    setFilteredData(result || data);
  }, [filters]);

  return (
    <div className="products">
      <div className="topnav">
        <header>Products</header>
        <select onChange={changeDepartment} value={filters.department}>
          <option value="All Departments">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label for="lowStock">
          <input type="checkbox" id="lowStock" onChange={changeLowStock} />
          Low Stock Items
        </label>
        <label>
          Sort by:
          <select onChange={changeSort}>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
          </select>
        </label>
        <Link to="/newproduct">
          <button>New</button>
        </Link>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>stock</th>
            <th>Supplier</th>
          </tr>

          {filteredData.map(
            ({ name, description, price, stock, supplier, imageUrl, sku }) => (
              <>
                <tr>
                  <td>
                    <img src={imageUrl} alt={name} width="150px" />
                  </td>
                  <Link to={`/${sku}`}>
                    <td>{name}</td>
                  </Link>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{supplier}</td>
                </tr>
              </>
            )
          )}
        </table>
      </div>
    </div>
  );
};

export default Products;

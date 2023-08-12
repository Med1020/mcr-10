import React, { useContext, useState } from "react";
import "./NewProduct.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const NewProduct = () => {
  const navigate = useNavigate();
  const { dataDispatch } = useContext(DataContext);
  const [addProduct, setAddProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const submitProduct = () => {
    dataDispatch({ type: "ADD_DATA", payload: addProduct });
    navigate("/products");
  };
  return (
    <div className="new-product">
      <form>
        <header>Add New Product</header>
        <div className="input">
          <label>Department:</label>
          <select
            onChange={(e) =>
              setAddProduct({ ...addProduct, department: e.target.value })
            }
          >
            <option>Select Department:</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
        <div className="input">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) =>
              setAddProduct({ ...addProduct, name: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Description: </label>
          <textarea
            onChange={(e) =>
              setAddProduct({ ...addProduct, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="input">
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) =>
              setAddProduct({ ...addProduct, price: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Stock:</label>
          <input
            type="number"
            onChange={(e) =>
              setAddProduct({ ...addProduct, stock: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>SKU:</label>
          <input
            onChange={(e) =>
              setAddProduct({ ...addProduct, sku: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Supplier:</label>
          <input
            onChange={(e) =>
              setAddProduct({ ...addProduct, supplier: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Delivered:</label>
          <input
            type="number"
            readonly="readonly"
            placeholder="0"
            value="0"
          ></input>
        </div>
        <div className="input">
          <label>Image URL:</label>
          <input
            onChange={(e) =>
              setAddProduct({ ...addProduct, imageURL: e.target.value })
            }
          ></input>
        </div>
        <button onClick={submitProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default NewProduct;

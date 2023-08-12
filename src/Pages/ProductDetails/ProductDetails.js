import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useContext(DataContext);
  const selectedProduct = data.filter(({ sku }) => sku === productId);
  return (
    <div className="product-details">
      {selectedProduct.map(
        ({
          name,
          description,
          price,
          supplier,
          imageUrl,
          sku,
          department,
          delivered,
        }) => (
          <>
            <header>{name}</header>
            <img src={imageUrl} alt={name} width="400px" />
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Department: {department}</p>
            <p>SKU: {sku}</p>
            <p>Delivered: {delivered}</p>
            <p>Description: {description}</p>
          </>
        )
      )}
    </div>
  );
};

export default ProductDetails;

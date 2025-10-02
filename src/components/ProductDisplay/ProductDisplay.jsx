import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../assets/all_product";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); 

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-display-container">
      <div className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </div>

      <div className="product-display-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          {product.discount > 0 && <p className="discount">Save ${product.discount}</p>}
          <p className="size"><strong>Size:</strong> 3ml / 6ml / 12ml</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

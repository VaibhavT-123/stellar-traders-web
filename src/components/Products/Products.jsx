import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import products from "../../assets/all_product";

const categories = [
  "View All",
  "Men",
  "Women",
  "Kids",
  "Electronics",
  "Appliances",
  "Mobiles",
  "Fashion",
  "Toys",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("View All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  let filteredProducts =
    selectedCategory === "View All"
      ? products
      : ["Men", "Women", "Kids"].includes(selectedCategory)
      ? products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : products;

  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="main">
        <div className="category-container">
          <ul className="category">
            {categories.map((cat, index) => (
              <li
                key={index}
                className={`category-item ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="middle">
          <div className="middle-container">
            <p className="product-count">
              Showing {filteredProducts.length} Products :
            </p>
            <input
              type="text"
              placeholder="Search Your Product...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="products">
          <div className="products-container">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={product.image} height="300px" alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                {product.discount > 0 && (
                  <p className="discount">Save ${product.discount}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

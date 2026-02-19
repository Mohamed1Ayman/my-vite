import React from "react";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop",img:"labtop.png", price: 10, description: "This is product 1" },
    { id: 2, name: "Computer",img:"comp.jpg", price: 20, description: "This is product 2" },
    { id: 3, name: "Mobile",img:"mobile.webp", price: 30, description: "This is product 3" },
  ];
  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <h3>${product.price}</h3>
          {product.description && <p>{product.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Products;

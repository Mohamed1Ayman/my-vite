import React from "react";

const Cart = ({ products }) => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      {products.length} products in cart
    </div>
  );
};

export default Cart;

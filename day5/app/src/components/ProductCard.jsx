import React from "react";

const ProductCard = ({ title, price, description, image, category }) => {

  return (
    <div style={{ border: "1px solid black", width: "200px",padding:"10px" }}>
      <img width={"150px"} src={image} alt="image" />
      <p>Title:{title}</p>
      <p>price: ${price}</p>
      <p>description: {description.slice(0,22)} </p>
      <p>category: {category}</p>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productData, setProductData] = useState([]); //hook useSatte

  async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    setProductData(result);
  }

  console.log(productData);

  //useEffect
  useEffect(() => {
    fetchData();
  }, []); //only first render of page there only one call useeffect function
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" ,gap:"15px"}}
    >
      {productData.map((element, i) => {
        return (
          <ProductCard
            key={i}
            title={element.title}
            price={element.price}
            image={element.image}
            description={element.description}
            category={element.category}
          />
        );
      })}
    </div>
  );
};

export default App;

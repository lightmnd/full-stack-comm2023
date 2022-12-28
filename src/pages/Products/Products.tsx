import React, { useEffect, useState } from "react";
import ProductsFilter from "../../components/ProductsFilter.tsx/ProductsFilter";
import axios from "axios";

export default function Products() {
  const baseURL = "https://fakestoreapi.com/products/";
  const [fashionData, setFashionData] = useState([]);
  const getCardData = async () => {
    try {
      const data = await axios.get(baseURL);
      console.log(data);
      if (data.status === 200) {
        setFashionData(data.data);
      }
    } catch (error) {
      throw new Error("Something went wrong. - ");
    }
  };

  useEffect(() => {
    getCardData();
  }, [baseURL]);

  console.log(fashionData);
  return (
    <div className="productsFilterMainContainer">
      <ProductsFilter title={""} description={""} fashionData={fashionData} />
    </div>
  );
}

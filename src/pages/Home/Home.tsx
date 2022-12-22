import React, { useEffect, useState } from "react";
import SliderImages from "./../../components/Slider/SliderImages";
import FeaturedProducts from "./../../components/FeaturedProducts/FeaturedProducts";
import axios from "axios";

export default function Home() {
  const baseURL = "https://fakestoreapi.com/products/";
  const [fashionData, setFashionData] = useState([]);
  const getCardData = async () => {
    const data = await axios.get(baseURL);
    console.log(data);
    if (data.status === 200) {
      setFashionData(data.data);
    }
  };

  useEffect(() => {
    getCardData();
  }, [baseURL]);
  return (
    <div className="home">
      <SliderImages />
      <FeaturedProducts
        title={"trending products"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
      />
      <FeaturedProducts
        title={"featured products"}
        description={
          "consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
      />
    </div>
  );
}

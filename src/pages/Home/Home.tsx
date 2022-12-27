import React, { useEffect, useState } from "react";
import SliderImages from "./../../components/Slider/SliderImages";
import FeaturedProducts from "./../../components/FeaturedProducts/FeaturedProducts";
import axios from "axios";
import CategorySection from "../../components/CategorySection/CategorySection";
import Contact from "./../../components/Contact/Contact";

export default function Home() {
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
  return (
    <div className="home">
      <SliderImages />
      <FeaturedProducts
        title={"trending products"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.ectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
      />
      <CategorySection />
      <FeaturedProducts
        title={"featured products"}
        description={
          "consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
      />
      <Contact />
    </div>
  );
}

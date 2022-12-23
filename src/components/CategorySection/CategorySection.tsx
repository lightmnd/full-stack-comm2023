import React, { useEffect, useState } from "react";
import "./CategorySection.scss";
import axios from "axios";

type ImageType = {
  image: string | never;
};

export default function CategorySection() {
  const baseURL = "https://fakestoreapi.com/products/";
  const [images, setImages] = useState<any[]>([]);
  const getCardData = async () => {
    try {
      const data = await axios.get(baseURL);
      console.log(data);
      if (data.status === 200) {
        setImages(data.data);
      }
    } catch (error) {
      throw new Error("Something went wrong. - ");
    }
  };

  useEffect(() => {
    getCardData();
  }, [baseURL]);

  return (
    <div className="categoryContainer">
      <div className="categoryLeft">
        <div className="leftTop">
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
        </div>
        <div className="leftBottom">
          {" "}
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
        </div>
      </div>
      <div className="midLeft">
        {" "}
        <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
      </div>
      <div className="categoryRight">
        <div className="rightTop">
          <div className="midRightTop">
            {" "}
            <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
          </div>
          <div className="endRightTop">
            {" "}
            <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
          </div>
        </div>
        <div className="rightBottom">
          {" "}
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
        </div>
      </div>
    </div>
  );
}

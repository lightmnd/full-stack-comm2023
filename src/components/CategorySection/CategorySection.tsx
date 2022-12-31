import React, { useEffect, useState } from "react";
import "./CategorySection.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

type ImageType = {
  image: string | never;
};

export default function CategorySection() {
  const baseURL = "https://fakestoreapi.com/products/";
  const { fashionData, loading, error } = useFetch(baseURL);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    // getCardData();
    setImages(fashionData);
  }, [baseURL, fashionData]);

  return error ? (
    <p>"Ops! Something went wrong..."</p>
  ) : loading ? (
    <p>"loading..."</p>
  ) : (
    <div className="categoryContainer">
      <div className="categoryLeft">
        <div className="leftTop">
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
          <button className="btnSale">
            <Link to="/sale">Sale</Link>
          </button>
        </div>
        <div className="leftBottom">
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
          <button className="btnWomen">
            <Link to="/sale">Women</Link>
          </button>
        </div>
      </div>
      <div className="midLeft">
        <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
        <button className="btnNewSeason">
          <Link to="/sale">New Season</Link>
        </button>
      </div>
      <div className="categoryRight">
        <div className="rightTop">
          <div className="midRightTop">
            <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
            <button className="btnMen">
              <Link to="/sale">Men</Link>
            </button>
          </div>
          <div className="endRightTop">
            <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
            <button className="btnShoes">
              <Link to="/sale">Shoes</Link>
            </button>
          </div>
        </div>
        <div className="rightBottom">
          <img src={images[Math.floor(Math.random() * 10)]?.image} alt="" />
          <button className="btnAccessories">
            <Link to="/sale">Accessories</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

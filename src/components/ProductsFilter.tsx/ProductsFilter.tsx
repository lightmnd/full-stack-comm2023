import React, { useState } from "react";
import "./ProductsFilter.scss";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

type FeaturedProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
};

export default function ProductsFilter(props: FeaturedProps) {
  const { title, description, fashionData } = props;
  const [rangeValue, setRangeValue] = useState(0);
  let catId: any = useParams();
  catId = parseInt(catId.id);

  const handleRange = (e: any) => {
    setRangeValue(e.target.value);
  };

  console.log(fashionData);

  return (
    <div className="filterContainer">
      <div className="filterLeft">
        <h3>Product Categories</h3>
        <label htmlFor="hat">Hat</label>
        <input type="checkbox" name="hat" id="hat" />
        <label htmlFor="tshirt">T-shirt</label>
        <input type="checkbox" name="tshirt" id="tshirt" />
        <h3>Filter by Price</h3>
        <div className="filterByPriceContainer">
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={handleRange} />
          <span>{rangeValue}</span>
        </div>
        <h3>Sprt by</h3>
        <div className="sortByPriceContainer">
          <label htmlFor="lowestPrice">Lowest Price</label>
          <input type="radio" name="lowestPrice" id="lowestPrice" />
          <label htmlFor="highestPrice">Highest Price</label>
          <input type="radio" name="highestPrice" id="highestPrice" />
        </div>
      </div>
      <div className="filterRight">
        <div className="topImage">
          <img src="https://source.unsplash.com/WLUHO9A_xik/" alt="" />
          <Card title={""} description={""} fashionData={fashionData} />
        </div>
      </div>
    </div>
  );
}

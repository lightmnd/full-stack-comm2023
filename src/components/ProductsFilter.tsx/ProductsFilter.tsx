import React, { useState } from "react";
import "./ProductsFilter.scss";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

type FeaturedProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
  loading: boolean;
  error: boolean;
};

export default function ProductsFilter(props: FeaturedProps) {
  const { title, description, fashionData } = props;
  const [rangeValue, setRangeValue] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const catId = parseInt(useParams().id!);

  const handleRange = (e: any) => {
    setRangeValue(e.target.value);
  };

  return (
    <div className="filterContainer">
      <div className="filterLeft">
        <h3>Product Categories</h3>
        <div className="productCatContainer">
          <div>
            <input type="checkbox" name="hat" id="hat" />
            <label htmlFor="hat">Hat</label>
          </div>
          <div>
            <input type="checkbox" name="tshirt" id="tshirt" />
            <label htmlFor="tshirt">T-shirt</label>
          </div>
        </div>
        <h3>Filter by Price</h3>
        <div className="filterByPriceContainer">
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={handleRange} />
          <span>{rangeValue}</span>
        </div>
        <h3>Sprt by</h3>
        <div className="sortByPriceContainer">
          <label htmlFor="lowestPrice">Lowest Price</label>
          <input
            type="radio"
            name="lowestPrice"
            id="lowestPrice"
            onChange={(e) => setSortBy("asc")}
          />
          <label htmlFor="highestPrice">Highest Price</label>
          <input
            type="radio"
            name="highestPrice"
            id="highestPrice"
            onChange={(e) => setSortBy("desc")}
          />
        </div>
      </div>
      <div className="filterRight">
        <div className="topImage">
          <img src="https://source.unsplash.com/WLUHO9A_xik/" alt="" />
        </div>
        {/* <div className="listCard"> */}
        <Card
          title={title}
          description={description}
          fashionData={fashionData}
          catId={catId}
          priceRange={rangeValue}
          sortBy={sortBy}
          loading={false}
          error={false}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

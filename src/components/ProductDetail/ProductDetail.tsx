import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const productId = parseInt(useParams().id!);
  const baseURL = `https://fakestoreapi.com/products/${productId}`;
  const { fashionData, loading, error } = useFetch(baseURL) as any;
  const imageUrl = fashionData.image;

  console.log("fashionData->", fashionData);
  return error ? (
    <p>Ops! Something went wrong...</p>
  ) : loading ? (
    <p>loading...</p>
  ) : (
    <div className="productDetailContainer">
      <div className="imagesDetail">
        <img src={imageUrl} alt={fashionData.title} />
        <img
          src="https://source.unsplash.com/random/?Cryptocurrency/"
          alt="crypto"
        />
      </div>
    </div>
  );
}

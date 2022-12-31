import React, { useEffect, useState } from "react";
import ProductsFilter from "../../components/ProductsFilter.tsx/ProductsFilter";
import useFetch from "../../hooks/useFetch";

export default function Products() {
  const baseURL = "https://fakestoreapi.com/products/";

  const { fashionData, loading, error } = useFetch(baseURL);

  return (
    <div className="productsFilterMainContainer">
      <ProductsFilter
        title={""}
        description={""}
        fashionData={fashionData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

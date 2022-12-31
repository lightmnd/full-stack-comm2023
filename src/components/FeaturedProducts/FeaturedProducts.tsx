import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import "./FeaturedProducts.scss";

type CardProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
  loading: boolean;
  error: boolean;
};

export default function FeaturedProducts(props: CardProps) {
  const { title, description, fashionData } = props;
  return (
    <div className="listOfCards">
      <Card
        title={title}
        description={description}
        fashionData={fashionData}
        catId={0}
        priceRange={0}
        sortBy={""}
        loading={false}
        error={false}
      />
    </div>
  );
}

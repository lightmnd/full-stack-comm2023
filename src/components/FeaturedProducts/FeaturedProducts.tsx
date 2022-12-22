import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import "./FeaturedProducts.scss";

type CardProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
};

export default function FeaturedProducts(props: CardProps) {
  const { title, description, fashionData } = props;
  return (
    <>
      <Card title={title} description={description} fashionData={fashionData} />
    </>
  );
}

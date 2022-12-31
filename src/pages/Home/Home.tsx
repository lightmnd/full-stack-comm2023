import React, { useEffect, useState } from "react";
import SliderImages from "./../../components/Slider/SliderImages";
import FeaturedProducts from "./../../components/FeaturedProducts/FeaturedProducts";
import axios from "axios";
import CategorySection from "../../components/CategorySection/CategorySection";
import Contact from "./../../components/Contact/Contact";
import useFetch from "../../hooks/useFetch";

export default function Home(/* use type to filter product when start using Strapi {type}*/) {
  const baseURL = "https://fakestoreapi.com/products/";
  const { fashionData, loading, error } = useFetch(baseURL);

  // KEEP IN MIND!
  // change with this snippet when start using Strapi API
  // const { fashionData, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  return (
    <div className="home">
      <SliderImages loading={loading} error={error} />
      <FeaturedProducts
        title={"trending products"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.ectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
        loading={loading}
        error={error}
      />
      <CategorySection />
      <FeaturedProducts
        title={"featured products"}
        description={
          "consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et. Pellentesque vitae lacus laoreet, mattis orci et, consectetur adipiscing elit. Pellentesque vitae lacus laoreet, mattis orci et."
        }
        fashionData={fashionData}
        loading={loading}
        error={error}
      />
      <Contact />
    </div>
  );
}

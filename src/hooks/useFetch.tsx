import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url: string) => {
  //   const baseURL = "https://fakestoreapi.com/products/";
  const [fashionData, setFashionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCardData = async () => {
    try {
      setLoading(true);
      const data = await makeRequest.get(url);

      if (data.status === 200) {
        setFashionData(data.data);
      }
    } catch (error) {
      setError(true);
      //throw new Error("Something went wrong. ");
    }
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [url]);

  return { fashionData, loading, error };
};

export default useFetch;

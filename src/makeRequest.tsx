import axios from "axios";

export const makeRequest = axios.create({
  // get the correct baseURL from .env when start using Strapi APIs to get data from Headless CMS
  // baseURL: process.addListener.REACT_APP_API_URL
  baseURL: "https://fakestoreapi.com/products/",

  // set header with Bearer token when will use Strapi APIs to get data from Headless CMS
  //headers: { Authorization: `bearer + ${process.env.REACT_APP_API_TOKEN}` },
});

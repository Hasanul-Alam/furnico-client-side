import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://furnico-server.onrender.com/all-products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return [products];
};

export default useProducts;

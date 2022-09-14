import { useEffect, useState } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const URL = await axios.get`https://fakestoreapi.com/products`;

      setPosts(URL.data);
      setLoading(true);
    };
    getProducts();
  }, []);
  console.log(URL);
  return [loading, posts];
};

export default usePosts;

import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCards from "../components/ProductsCards/ProductsCards";
import Spinner from "../components/Spinner/Spinner";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const URL = await axios.get`https://fakestoreapi.com/products`;
      setPosts(URL.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(URL);

  return (
    <>
      {loading && <Spinner />}

      {/* ProductsCards Components */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifycontent: "space-between",
        }}
      >
        {posts.map((product) => (
          <ProductsCards
            key={product.id}
            product={product}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating.rate}
            loading={loading}
          />
        ))}
      </div>
      {/* ProductsCards Components */}
    </>
  );
};

export default Products;

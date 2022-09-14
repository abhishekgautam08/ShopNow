import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack } from "@mui/material";
import ProductsCards from "../components/ProductsCards/ProductsCards";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
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
  return (
    <>
      {/* {loading && <Spinner />} */}
      <Box>
        <Stack
          // direction="row"
          // justifyContent="space-evenly"
          // alignItems="flex-start"
          spacing={0.5}
        >
          {/* <SideBar /> */}
          <div className="card-container">
            {posts.map((product) => (
              <ProductsCards
                product={product}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                rating={product.rating.rate}
              />
            ))}
          </div>

          {/* <Footer /> */}
        </Stack>
      </Box>
    </>
  );
};

export default Home;

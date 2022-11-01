import React from "react";
import Carousel from "react-material-ui-carousel";
import usePosts from "../hooks/usePosts";
import "./Home.css";
import { Paper } from "@mui/material";

const Home = () => {
  const { posts } = usePosts();
  return (
    <>
      <Carousel>
        {posts.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        object-fit=" cover"
        style={{ width: "40%", height: "45vh" }}
        className="center"
      />
    </Paper>
  );
}
export default Home;

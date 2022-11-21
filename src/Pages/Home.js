import React from "react";
import Carousel from "react-material-ui-carousel";
import usePosts from "../hooks/usePosts";
import "./Home.css";
import { Paper } from "@mui/material";

const Home = () => {
  const { posts } = usePosts();
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Carousel
        style={{
          flex: 1,
        }}
      >
        {posts.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item({ item }) {
  return (
    <Paper>
      <div
        style={{
          objectFit: "cover",
        }}
      >
        <img src={item.image} alt={item.title} className="center" />
      </div>
    </Paper>
  );
}
export default Home;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                About
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                tortor vitae purus faucibus. Iaculis nunc sed augue lacus
                viverra vitae congue eu. Arcu non odio euismod lacinia at quis.
                Tempor orci eu lobortis elementum nibh. Sed adipiscing diam
                donec adipiscing tristique risus. Etiam dignissim diam quis enim
                lobortis scelerisque. Scelerisque fermentum dui faucibus in
                ornare quam. Id velit ut tortor pretium. Eget lorem dolor sed
                viverra ipsum. Orci eu lobortis elementum nibh tellus molestie
                nunc non. Faucibus scelerisque eleifend donec pretium vulputate
                sapien nec sagittis aliquam. Ut pharetra sit amet aliquam id
                diam maecenas ultricies. Malesuada pellentesque elit eget
                gravida. Scelerisque mauris pellentesque pulvinar pellentesque.
                Turpis egestas maecenas pharetra convallis posuere morbi leo
                urna. Purus semper eget duis at tellus at urna. Dignissim diam
                quis enim lobortis scelerisque fermentum dui. Nibh nisl
                condimentum id venenatis a. Auctor augue mauris augue neque
                gravida in fermentum. Tempor orci eu lobortis elementum nibh
                tellus molestie nunc non.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;

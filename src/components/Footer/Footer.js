import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      marginTop={0.2}
      bgcolor="#272727"
      color="white"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    ></Box>
  );
};

export default Footer;

import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, ButtonGroup } from "@mui/material";

const Icon = () => {
  return (
    <div>
      <ButtonGroup color="primary" aria-label="add to shopping cart">
        <Button variant="" startIcon={<AddShoppingCartIcon />}></Button>

        <Button variant="" startIcon={<FavoriteBorderOutlinedIcon />}></Button>

        <Button variant="" startIcon={<AccountCircleOutlinedIcon />}></Button>
      </ButtonGroup>
    </div>
  );
};

export default Icon;

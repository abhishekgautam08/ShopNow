import Badge from "@mui/material/Badge";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";

import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  ADD_QUANTITY,
  REMOVE_TO_CART,
  SUB_QUANTITY,
} from "../../store/cartSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const [anchorEl, setAnchorEl] = useState(null);
  // const [counter, setCounter] = useState(1);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //increase counter
  const increase = (productId) => {
    dispatch(ADD_QUANTITY(productId));
    // setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = (productId) => {
    dispatch(SUB_QUANTITY(productId));
    // setCounter((count) => count - 1);
  };

  const getDatas = items;
  const handleRemove = (productId) => {
    dispatch(REMOVE_TO_CART(productId));
  };

  // State
  return (
    <>
      <Badge
        badgeContent={getDatas.reduce((acc, item) => {
          acc += item.count;
          return acc;
        }, 0)}
        id="basic-button"
        onClick={handleClickOpen}
        color="primary"
        sx={{ mr: 2 }}
      >
        <i
          className="fa-solid fa-cart-shopping text-light"
          style={{ fontSize: 17, cursor: "pointer" }}
        />
      </Badge>
      {getDatas.length === 0 ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ p: 2 }}
        >
          Your Cart Is Empty
        </Menu>
      ) : (
        <Dialog fullScreen open={open} onClose={handleClose}>
          <AppBar sx={{ position: "sticky" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Cart List
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container>
            <Grid item xs={7}>
              {getDatas.map((product) => {
                return (
                  <>
                    <Card sx={{ m: 1 }}>
                      <CardContent>
                        <CardMedia
                          component="img"
                          height="140"
                          image={product.image}
                          alt="image"
                          sx={{ objectFit: "contain" }}
                        />
                        <br />
                        <br />
                        <Typography>
                          <b>Product Name-</b>
                          &nbsp; &nbsp;
                          {product.title}
                        </Typography>
                        <br />
                        <Typography>
                          <b>Price-</b>
                          &nbsp; &nbsp;
                          {(product.price * 70).toFixed(2)} ₹
                        </Typography>
                        <br />
                        <IconButton onClick={() => decrease(product.id)}>
                          -
                        </IconButton>
                        &nbsp; &nbsp;
                        <span>{product.count}</span>
                        &nbsp; &nbsp;
                        <IconButton onClick={() => increase(product.id)}>
                          +
                        </IconButton>
                        <br />
                        <br />
                        <Divider />
                        <Button onClick={() => handleRemove(product.id)}>
                          Remove
                        </Button>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
            </Grid>
            <Grid item xs={5}>
              <Card
                sx={{
                  minWidth: 250,
                  m: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h5">
                    <b> Quantity - </b>
                    &nbsp; &nbsp;
                    {getDatas.reduce((acc, item) => {
                      acc += item.count;
                      return acc;
                    }, 0)}
                  </Typography>
                  <Divider />
                  <br />
                  <Typography color="text.secondary" variant="h3">
                    <b> Total - </b> {(total * 70).toFixed(2)} ₹
                  </Typography>
                  <Divider />
                  <CardActions>
                    <Button size="large">Buy now</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Dialog>
      )}
    </>
  );
};

export default AddToCart;

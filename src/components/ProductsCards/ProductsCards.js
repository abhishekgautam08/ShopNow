import { useState } from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ProductsCards = (props) => {
  let { product, image, title, price, description, rating } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // State
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  // State

  return (
    <>
      {/* <Box
      // bgcolor="white"
      //  flex={5}
      // padding={1}
      > */}
      {/* <Grid
        container
        // direction="row"
        justifyContent="space-around"
        // alignItems="flex-start"
      > */}

      <Card sx={{ maxWidth: 260, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt=""
          sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title.slice(0, 20)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price- {price * 70}
          </Typography>
          <Typography component="legend">Rating - </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2" color="text.secondary">
            Description- {description.slice(0, 66)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleAdd(product)}
          >
            Add To Cart
          </Button>
          {"\u00a0\u00a0"} {"\u00a0\u00a0"} {"\u00a0\u00a0"} {"\u00a0\u00a0"}{" "}
          {"\u00a0\u00a0"} {"\u00a0\u00a0"}
          {/* This button for full screen image */}
          <Button
            startIcon={<FullscreenIcon />}
            onClick={handleClickOpen}
          ></Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogContent>
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  width="500"
                  image={image}
                  alt=""
                  sx={{
                    padding: "1em 1em 1em 1em",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </DialogContent>
          </BootstrapDialog>
        </CardActions>
      </Card>

      {/* </Grid> */}
      {/* </Box> */}
    </>
  );
};

export default ProductsCards;

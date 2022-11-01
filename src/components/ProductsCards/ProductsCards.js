import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../store/cartSlice";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ReactReadMoreReadLess from "react-read-more-read-less";

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
    dispatch(ADD_TO_CART(product));
  };
  // State

  return (
    <>
      <Card sx={{ maxWidth: 300, m: 6 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="image"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <ReactReadMoreReadLess
              charLimit={30}
              readMoreText={" ▼"}
              readLessText={" ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {title}
            </ReactReadMoreReadLess>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price- {(price * 70).toFixed(2)} ₹
          </Typography>

          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2" color="text.secondary">
            <ReactReadMoreReadLess
              charLimit={50}
              readMoreText={" ▼"}
              readLessText={" ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {description}
            </ReactReadMoreReadLess>
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

          {/* This button for full screen image */}

          <Button
            startIcon={<FullscreenIcon />}
            onClick={handleClickOpen}
          ></Button>

          {/* This button for full screen image */}

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
                  alt="image"
                  sx={{
                    objectFit: "contain",
                  }}
                />
              </Card>
            </DialogContent>
          </BootstrapDialog>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductsCards;

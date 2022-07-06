import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/reducers/cartRedux";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  ImageListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { get_product } from "../redux/action/product";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "auto",
  },
  image: {
    marginTop: "20px",
    borderRadius: "10px",
    width: "100%",
    objectFit: "contain",
  },
  title: {
    fontSize: "32px",
    marginTop: "20px",
  },
  desc: {
    fontSize: "20px",
    marginTop: "20px",
  },
  quautity_box: {
    width: "50px",
    height: "30px",
    marginTop: "20px",
  },
  icon: {
    marginTop: "20px",
    backgroundColor: "lightgray",
    margin: "5px",
  },
  cartBtn: {
    marginTop: "40px",
    marginLeft: "15px",
    backgroundColor: "lightgray",
    border: "none",
    outline: "none",
  },
});
const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(0);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    get_product(id).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  return (
    <Container className={classes.container} maxWidth="md">
      <Box>
        {product && (
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={product.imageURL}
                height="520px"
                alt="product_img"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.title}>{product.title}</Typography>
              <Typography
                className={classes.desc}
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              ></Typography>
              <Box>
                <IconButton
                  className={classes.icon}
                  onClick={(e) => setQty((prev) => (prev = prev + 1))}
                >
                  <Add />
                </IconButton>
                <TextField
                  className={classes.quautity_box}
                  id="outlined-basic"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  variant="outlined"
                />
                <IconButton
                  className={classes.icon}
                  onClick={(e) => setQty((prev) => (prev = prev - 1))}
                >
                  <Remove />
                </IconButton>
              </Box>
              <Button
                className={classes.cartBtn}
                variant="outlined"
                onClick={() =>
                  dispatch(addProduct({ ...product, quantity: qty }))
                }
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Product;

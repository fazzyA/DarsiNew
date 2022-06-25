import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/reducers/cartRedux";
import { useDispatch } from "react-redux";

import React from "react";
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

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "auto",
  },
  image: {
    marginTop: "20px",
    borderRadius: "10px",
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

  return (
    <Container className={classes.container} maxWidth="md">
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              height="520px"
              alt="product_img"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.title}>product 1</Typography>
            <Typography className={classes.desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis amet soluta omnis a sapiente{" "}
            </Typography>
            <Box>
              <IconButton className={classes.icon}>
                <Add />
              </IconButton>
              <TextField
                className={classes.quautity_box}
                id="outlined-basic"
                label="2"
                variant="outlined"
              />
              <IconButton className={classes.icon}>
                <Remove />
              </IconButton>
            </Box>
            <Button className={classes.cartBtn} variant="outlined">
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;

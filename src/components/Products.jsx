import {
  Grid,
  Container,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../redux/action/product";
import { addProduct } from "../redux/reducers/cartRedux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    margin: 10,
  },
  media: {
    height: 180,
  },
  heading: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
  },
  cardBtn: {
    marginTop: -10,
    textAlign: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
});
const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    get_products(dispatch);
  }, []);
  const { products, isFetching } = useSelector((state) => state.product);
  return (
    <Container maxWidth="lg">
      <Typography className={classes.heading}>All Products</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {!isFetching &&
          products?.map((item) => (
            <Grid item xs={6} md={2} key={item._id}>
              <Card className={classes.root} variant="outlined">
                <Link to={`/product/${item._id}`} className={classes.link}>
                  <CardMedia className={classes.media} image={item.imageURL} />
                  <CardContent className={classes.content}>
                    <Typography color="textSecondary" component="h3">
                      {item.title}
                    </Typography>
                    <Typography color="secondary" component="h5">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Link>

                <CardContent className={classes.cardBtn}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      if (item.stockCountPending > 0) {
                        dispatch(addProduct({ ...item, quantity: 1 }));
                      }
                    }}
                  >
                    {item.stockCountPending > 0
                      ? "Add To Cart"
                      : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Products;

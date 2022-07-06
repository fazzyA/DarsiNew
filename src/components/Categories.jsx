import {
  Box,
  Grid,
  Container,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { get_categories } from "../redux/action/category";
import { useDispatch, useSelector } from "react-redux";

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
  link: {
    textDecoration: "none",
  },
});
const Categories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    get_categories(dispatch);
  }, []);
  const { categories, isFetching } = useSelector((state) => state.category);
  return (
    <Container maxWidth="md">
      <Typography className={classes.heading}>Categories</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {!isFetching
          ? categories?.map((item) => (
              <Grid item xs={6} md={4} key={item._id}>
                <Link className={classes.link} to={`categ_item/${item._id}`}>
                  <Card className={classes.root} variant="outlined">
                    <CardMedia
                      className={classes.media}
                      image={item.imageURL}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
};

export default Categories;

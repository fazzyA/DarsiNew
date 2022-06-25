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
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    get_categories(dispatch);
  }, []);
  return (
    <Container maxWidth="md">
      <Typography className={classes.heading}>Categories</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {categories &&
          categories.map((item) => (
            <Grid item xs={6} md={4} key={item.id}>
              <Link className={classes.link} to={`categ_item/${item.id}`}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image={
                      "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    }
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
          ))}
      </Grid>
    </Container>
  );
};

export default Categories;

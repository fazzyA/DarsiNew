import { popularProducts } from "../data";

import { Box, Grid, Container, Card, CardMedia, Typography, CardContent, CardActions, IconButton, Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    margin: 10
  },
  media: {
    height: 180,
  },
  heading: {

    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  cardBtn: {
    marginTop: -10,
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none'
  }
});
const Products = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.heading}>All Products</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {popularProducts.map((item) => (
          <Grid item xs={6} md={2} key={item.id}>
            <Card className={classes.root} variant="outlined">
              <CardMedia
                className={classes.media}
                image={item.img}
              />
              <CardContent className={classes.content}>
                <Typography color="textSecondary" component="h3">
                  {item.title}
                </Typography>
                <Typography color="secondary" component="h5">
                  RS. 500
                </Typography>
              </CardContent>
            <CardContent className={classes.cardBtn}>
              <Link to={`/product/${item.id}`} className={classes.link}>
              <Button variant="outlined">Add To Cart</Button>
              </Link>
            </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;
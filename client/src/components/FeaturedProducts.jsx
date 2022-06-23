import { categories } from "../data";

import { Box, Grid, Container, Card, CardMedia, Typography, CardContent } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  }
});
const FeaturedProducts = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.heading}>Featured Products</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {categories.map((item) => (
          <Grid item xs={6} md={3} key={item.id}>
            <Card className={classes.root} variant="outlined">
              <CardMedia
                className={classes.media}
                image={item.img}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FeaturedProducts
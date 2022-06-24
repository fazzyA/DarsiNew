import { categories } from "../data";

import { Box, Grid, Container, Card, CardMedia, Typography, CardContent } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  link: {
    textDecoration : 'none',
  }
});
const Categories = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography className={classes.heading}>Categories</Typography>
      <hr style={{ marginBottom: 15 }} />
      <Grid container>
        {categories.map((item) => (
          <Grid item xs={6} md={4} key={item.id}>
              <Link className={classes.link} to={`categ_item/${item.cat}`}>
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
          </Link>
            </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Categories
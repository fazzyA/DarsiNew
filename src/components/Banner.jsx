import { Box, Typography, Grid, Paper, Button } from '@material-ui/core'
import React from 'react'
import heroImg from "../images/hero_img.webp";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme =>{
    return {
    banner_box : {
        display : "flex" ,
        justifyContent: "space-between",
        // backgroundColor:'pink'
    },
    img_div : {
        justifyContent : 'flex-end',
        // width : "500px",
        
    },
    image : {
        [theme.breakpoints.down('sm')] : {
            width: '300px',
            
        },
        [theme.breakpoints.up('sm')] : {
            width: '500px'
        },
        // marginLeft : "100px"
        
    }
   
}
})

const Banner = () => {
  const classes = useStyles();
  

    return (
        <Box className={classes.banner_box}>
            <Grid container >
               
                <Grid item xs={12} md={5} >
                    <Box
                        fontSize={20}
                        fontWeight="fontWeightBold"
                        lineHeight={3}
                        letterSpacing={3}
                        textAlign="center"
                        marginTop={15}>
                        <Typography variant='h2'>
                            Welcome to Darsi
                        </Typography>
                        <Typography variant='p' >
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </Typography>
                    </Box>
                    <Box lineHeight={2} textAlign="center" marginTop={5}>
                        <Button variant="outlined" color="primary">Shop Now</Button>
                    </Box>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid className={classes.img_div} item xs={10} md={5}>
                    
                    <img src={heroImg}  height={500} width={600} className={classes.image}/>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner
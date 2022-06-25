import { Box, Typography, Grid, Paper, Button } from '@material-ui/core'
import React from 'react'
import heroImg from "../images/hero-removebg.png";
import styled from "styled-components";

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-top : 20px;
`;

const Image = styled.img`
  height: 80%;

`;
const Banner = () => {
    return (
        <Box sx={{ bgcolor: '#f5fafd' }}>
            <Grid container >
                <Grid item xs={12} md={7}>
                    <ImgContainer>
                        <Image src={heroImg} />
                    </ImgContainer>
                    {/* <img src={heroImg} width={500} height={500} /> */}

                </Grid>
                <Grid item xs={12} md={5}>
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

            </Grid>
        </Box>
    )
}

export default Banner
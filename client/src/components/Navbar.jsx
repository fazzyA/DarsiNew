import { AppBar, styled, Toolbar, Box, Typography, InputBase, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/darsi-logo.png";
import { makeStyles } from '@material-ui/core/styles';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: '#fff'
});
const Logo = styled("img")({
  width: "80px",
  height: "80px"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fafafa",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const useStyles = makeStyles({
  link : {
    textDecoration:'none',
    color: 'black',
    fontSize: 16,
    fontWeight: 500,
  }
})
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Link to="/">
        <Logo src={logo}></Logo>
        </Link>
        <Search>
          <InputBase placeholder='search.....' />
        </Search>
        <Icons>
          <Link className={classes.link} to={`login`}>
            <linksTypography variant='button'>Login</linksTypography>
          </Link>
          <Link className={classes.link} to={`register`}>
            <linksTypography variant='button'>Signup</linksTypography>
          </Link>
          <Link className={classes.link}>
            <linksTypography variant='button'>Packeges</linksTypography>
          </Link>
          <Badge badgeContent={4} color="secondary">
            < ShoppingCart color="action" />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
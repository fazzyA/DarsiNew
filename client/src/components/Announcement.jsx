import React from 'react'
import { AppBar, styled, Toolbar, Box, Typography, InputBase } from '@material-ui/core'
import { Link } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    backgroundColor: '#9e9e9e',
    
});

const Announcement = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Link>
                    <Typography>Login</Typography>
                </Link>
                <Link>
                    <Typography>Signup</Typography>
                </Link>
                <Link>
                    <Typography>Packeges</Typography>
                </Link>
            </StyledToolbar>
        </AppBar>
    )
}

export default Announcement
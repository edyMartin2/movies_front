import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export default function NavBar({ buttonTxt, to }: any) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "red" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Netflix
                    </Typography>

                    <Button children={
                        <Link style={{ color: '#fff', textDecoration: 'none' }} to={to}>
                            {buttonTxt}
                        </Link>
                    }></Button>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
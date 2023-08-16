import NavBar from "../components/NavBar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import FormMMovie from "../components/FormMovie"

const Add = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar buttonTxt={'Regresar'} to={'/'}></NavBar>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: '10px' }}
            >
                <FormMMovie></FormMMovie>
            </Grid>
        </Box>
    )
}

export {
    Add
}
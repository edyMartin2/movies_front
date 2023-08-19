import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import Movies from '../services/movieService';
import { useState } from 'react';
import NavBar from "../components/NavBar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import FormMMovie from "../components/FormMovie"
const movieService = new Movies()

const Update = () => {
    const { id } = useParams();

    /**
    * Efecto usado para verificar el login
    */
    useEffect(() => {
        let isLoginValue = window.localStorage.getItem('isLogin')
        let isLogin = isLoginValue !== null ? Boolean(isLoginValue) : false
        if (isLogin === false) {
            window.location.href = '/'
        }
    })

    return (<Box sx={{ flexGrow: 1 }}>
        <NavBar buttonTxt={'Regresar'} to={'/'}></NavBar>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '10px' }}
        >
            <FormMMovie id={id}></FormMMovie>
        </Grid>
    </Box>)
}

export { Update }
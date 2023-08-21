import { Component, useState } from "react"
import MovieService from "../services/movieService"
import MoviesType from "../types/MoviesType"
import CardHelper from '../components/CardMovie'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from "../components/NavBar";
import { TextField, Pagination } from "@mui/material";
import FormLogin from "../components/FormLogin";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const movieService = new MovieService()


const Home = () => {
    const [movies, setMovies] = useState<Array<MoviesType>>([])
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const GetMovies = (page: number = 1) => {
        movieService.Get("", page).then(res => { setMovies(res) })
    }

    useState(() => {
        let moviesLenght = movies.length
        let isLoginValue = window.localStorage.getItem('isLogin')
        setIsLogin(isLogin !== null ? Boolean(isLoginValue) : false)

        if (moviesLenght === 0) {
            GetMovies()
        }
    })



    /**
     * this function return an react component 
     * this function maping movies array 
     */
    const MoviesTemplate: any = () => {
        let moviesLenght = movies.length

        if (moviesLenght !== 0) {
            console.log('las movies', movies)

            return movies.map((i: MoviesType, k: number) => {
                return (
                    <Grid key={k} item xs={4}>
                        <CardHelper url={i.image} title={i.title} description={i.slug} userType={isLogin === true ? 'admin' : 'visitor'} id={String(i._id)} information={i}></CardHelper>
                    </Grid>
                )
            })


        } else {
            return <>No hay peliculas</>
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            {!isLogin && (<NavBar buttonTxt={'Ingresar'} to={'/admin'}></NavBar>)}
            {isLogin && (<NavBar buttonTxt={'Agregar nueva'} to={'/add'}></NavBar>)}
            <Grid container spacing={2} style={{ padding: "10px" }}>
                <Grid item xs={12}>
                    <Pagination count={10} showFirstButton showLastButton onChange={(e, k) => {
                        GetMovies(k)
                    }} />
                </Grid>
                <MoviesTemplate></MoviesTemplate>
            </Grid>
        </Box>
    )
}

export {
    Home
}
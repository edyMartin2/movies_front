import { Component, useState } from "react"
import MovieService from "../services/movieService"
import MoviesType from "../types/MoviesType"
import CardHelper from '../components/CardHelper'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from "../components/NavBar";

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

    useState(() => {
        let moviesLenght = movies.length

        if (moviesLenght === 0) {
            movieService.Get().then(res => { setMovies(res) })
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
                        <CardHelper url={i.image} title={i.title} description={i.slug} userType="admin" id={String(i._id)} information={i}></CardHelper>
                    </Grid>
                )
            })


        } else {
            return <>No hay peliculas</>
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar buttonTxt={'Agregar nueva'} to={'/add'}></NavBar>
            <Grid container spacing={2} style={{ padding: "10px" }}>
                <MoviesTemplate></MoviesTemplate>
            </Grid>
        </Box>
    )
}

export {
    Home
}
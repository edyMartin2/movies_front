import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import SelectComponent from './SelectPlatform';
import Movies from '../services/movieService';
import MoviesType from '../types/MoviesType';
import Plataforms from '../types/PlataformsType';

const movie = new Movies()

export default function FormMMovie({ id }: any) {
    const [title, setTitle] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [director, setDirector] = useState<string>('')

    const [selected, setSelected] = useState<string[]>([])
    const [platformsAct, setPlatformsAct] = useState<string>("")

    const SaveMovie = () => {

        let plataform = selected.map((i) => {
            let plt = {
                _id: i
            }

            return plt
        })

        const data: MoviesType = {
            "title": title,
            "image": image,
            "director": director,
            platforms: plataform
        }

        if (plataform.length === 0) {
            delete data.platforms
        }

        movie.Save(data, id).then(res => {
            if (res.acknowledged) {
                alert("Guardado")
                setTitle('')
                setImage('')
                setDirector('')
                setSelected([])
            }
        })
    }

    useState(() => {
        if (id) {
            movie.Get(id).then(res => {
                if (res.length > 0) {
                    setTitle(res[0].title ? res[0].title : '')
                    setDirector(res[0].director ? res[0].director : '')
                    setImage(res[0].image ? res[0].image : '')
                    let platformsAct: any = []
                    res[0].platforms.map((i: any) => {
                        let title = i.title
                        platformsAct.push(title)
                    })

                    setPlatformsAct(platformsAct.join(','))
                }
            })
        }
    })
    return (
        <>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField style={{ width: '100%' }} value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" label="Title" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField style={{ width: '100%' }} value={image} onChange={(e) => { setImage(e.target.value) }} id="image" label="Image" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField style={{ width: '100%' }} value={director} onChange={(e) => { setDirector(e.target.value) }} id="director" label="director" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Plataformas actuales : {platformsAct}</p>
                        <SelectComponent selected={selected} setSelected={setSelected}></SelectComponent>
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={() => { SaveMovie() }}> Guardar </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

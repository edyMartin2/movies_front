import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHelperType from '../types/CardHelperType';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import MovieService from "../services/movieService"
import { Link } from 'react-router-dom';
import MoviesType from '../types/MoviesType';
import Plataforms from '../types/PlataformsType';
const movieService = new MovieService()


export default function CardHelper({ url, title, description, userType, id, information }: CardHelperType) {

    const DeleteAdminMovie = () => {
        movieService.Delete(id).then(res => { window.location.reload(); })
    }

    const DuplicateMovie = () => {
        const result = window.confirm('¿Estás seguro de continuar?');

        if (result) {
            let platforms = information.platforms?.map((i: Plataforms) => {
                return {
                    _id: i._id
                }
            })
            let newInformation: MoviesType = {
                title: information.title,
                image: information.image,
                director: information.director,
                platforms: platforms
            }
            movieService.Save(newInformation).then((res) => {
                if (res.acknowledged) {
                    alert("Guardado")
                    window.location.reload()
                }
            })
        }
    }


    return (
        <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={url}
                title="green iguana"
            />
            <CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardContent>
            {userType === 'admin' && (<CardActions disableSpacing >
                <ButtonGroup>
                    <Button onClick={() => { DeleteAdminMovie() }}>Eliminar</Button>
                    <Button onClick={() => { DuplicateMovie() }}>Clonar</Button>
                    <Link style={{ textDecoration: 'none' }} to={`/update/${id}`}>
                        <Button >
                            Editar
                        </Button>
                    </Link>

                </ButtonGroup>
            </CardActions>)}
            {userType === 'visitor' && (<CardActions disableSpacing >
                <ButtonGroup>
                    <Link style={{ textDecoration: 'none' }} to={`/more/${id}`}>
                        <Button >
                            Ver Mas
                        </Button>
                    </Link>

                </ButtonGroup>
            </CardActions>)}
        </Card>
    );
}
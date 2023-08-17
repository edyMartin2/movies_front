import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHelperType from '../types/CardHelperType';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import MovieService from "../services/movieService"
const movieService = new MovieService()


export default function CardHelper({ url, title, description, userType, id }: CardHelperType) {

    const DeleteAdminMovie = () => {
        movieService.Delete(id).then(res => { window.location.reload(); })
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
                    <Button>Clonar</Button>
                    <Button>Editar</Button>
                </ButtonGroup>
            </CardActions>)}
        </Card>
    );
}
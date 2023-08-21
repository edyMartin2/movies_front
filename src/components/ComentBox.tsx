import { TextField, Grid, Rating, Button, Box } from "@mui/material"
import { useEffect, useState } from "react"
import CommentData from "../types/CommentData";
import CommentService from "../services/commentService";
import SelectPlatform from "./SelectPlatform";
import BackendResponse from "../types/BackendResponse";
const commentService = new CommentService()
const CommentBox = ({ id }: any) => {
    const [valueRating, setValueRating] = useState<number | null>(2);
    const [allComments, setAllComments] = useState<Array<CommentData>>([])
    const [selected, setSelected] = useState<string[]>([])

    const [filter, setFilter] = useState<string[]>([])
    const [autor, setAutor] = useState<string>("")
    const [body, setBody] = useState<string>("")

    const Comments = () => {
        const comments: any = []
        allComments.map((i: CommentData, key: number) => {
            comments.push(<div className="texto"> {i.author}: {i.body} <Rating
                name="hover-feedback"
                disabled={true}
                value={i.score}
            /></div>)
        })

        return comments
    }

    const saveComment = () => {
        const saveData: CommentData = {
            movie: id,
            platform: selected[0],
            author: autor,
            body: body,
            score: typeof (valueRating) === 'number' ? valueRating : 0
        }

        commentService.Save(saveData).then((res: BackendResponse) => {
            if (res.acknowledged === true) {
                alert("Enviamos tu comentario")
                window.location.reload()
            }
        })
    }

    const getCommentsByPlatform = () => {
        commentService.GetByFilter(id, filter[0]).then(res => {
            setAllComments(res)
        })
    }


    useEffect(() => {
        console.log("algo cambio")
        // if (allComments.length <= 0) {
        commentService.GetByMovie(id).then(res => {

            console.log("obteniendo datos")
            setAllComments(res)
        })
        // }
    }, [])

    return (
        <>
            <Grid item xs={6}>



                <Grid container spacing={2} style={{ borderColor: '#000', borderStyle: 'ridge', marginTop: '20px' }}>

                    <Grid item xs={12}>
                        <p>Selecciona una plataforma para filtrar</p>
                        <SelectPlatform selected={filter} setSelected={setFilter}></SelectPlatform>
                        <Button onClick={() => { getCommentsByPlatform() }}>Filtrar</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <div id="global">
                            <div id="mensajes">
                                <Comments></Comments>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginTop: '30px' }}>
                    <h1>Dejanos tus comentarios</h1>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField value={autor} onChange={(e) => { setAutor(e.target.value) }} style={{ width: '100%' }} id="name" label="Nombre" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={4}
                            style={{ width: '100%' }}
                            id="Comments"
                            label="Comentarios"
                            value={body}
                            onChange={(e) => { setBody(e.target.value) }}
                            variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <p>!Solo se toma en cuenta la primer plataforma seleccionada!</p>
                        <SelectPlatform selected={selected} setSelected={setSelected}></SelectPlatform>
                    </Grid>

                    <Grid item xs={12}>
                        <Rating
                            name="hover-feedback"
                            value={valueRating}
                            precision={1}
                            onChange={(event, newValue) => {
                                console.log("new Value", newValue)
                                setValueRating(newValue)
                            }}

                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={() => { saveComment() }}>Guardar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CommentBox
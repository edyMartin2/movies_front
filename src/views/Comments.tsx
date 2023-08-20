import { useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Grid } from "@mui/material"
import NavBar from "../components/NavBar"
import CommentBox from "../components/ComentBox"

const Comments = () => {
    const { id } = useParams()
    const [isLogin, setIsLogin] = useState<boolean>(false)

    useState(() => {
        let isLoginValue = window.localStorage.getItem('isLogin')
        setIsLogin(isLogin !== null ? Boolean(isLoginValue) : false)
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
            <CommentBox></CommentBox>
        </Grid>

    </Box>)
}

export {
    Comments
}
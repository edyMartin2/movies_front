import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';



const FormLogin = () => {
    const [user, setUser] = useState<string>("");
    const [passworld, setPassworld] = useState<string>("");

    const LoginAction = () => {
        if (user !== "" && passworld !== "") {
            localStorage.setItem("isLogin", "true");
            window.location.href = "/"
        }
    }

    return (
        <>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField style={{ width: '100%' }} value={user} onChange={(e) => { setUser(e.target.value) }} id="user" label="Usuario" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type='password' style={{ width: '100%' }} value={passworld} onChange={(e) => { setPassworld(e.target.value) }} id="pass" label="Contraseña" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={() => { LoginAction() }}>Iniciar sesion</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FormLogin
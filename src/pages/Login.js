import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useStateContext} from "../state/StateContext";
import {ACTION_TYPES} from "../state/StateContext";
import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Alert} from "@mui/material";
import useFetch from "../hooks/useFetch";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.doge.crussaire.com/news?utm_source=linkedin">
                Ցրած լոգին ֆորմա
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {


    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [fetchUserInfo, setFetchUserInfo] = useState(null)

    const {state:{user},dispatch} = useStateContext()

    const {data, error, isLoading} = useFetch(fetchUserInfo)


    useEffect(() => {
        if (data && data.length > 0 && !error) {
            const {boarads, ...userInfo} = data[0]
            setFetchUserInfo(null)
            if(data[0].password === passValue){
                dispatch({type: ACTION_TYPES.LOGIN, userInfo,boarads})
                navigate(`/${data[0]?.userName}`, {replace: true})
            }else{
                setErrorMessage('Invalid userName or Password!')
            }
        }
    }, [data])
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state && location.state.path ? location.state.path : '/'
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('')
        const email = emailValue.trim()
        const pass = passValue
        if(email.length > 0 && pass.length > 0){
            setFetchUserInfo(`https://5d98263861c84c00147d6d97.mockapi.io/users?userName=${email}`)

        }else{
            setErrorMessage('Be careful please !')
        }


    };
    const emailInputHandler = (e)=>{
        setErrorMessage('')
        setEmailValue(e.target.value)
    }
    const passInputHandler =(e)=>{
        setErrorMessage('')
        setPassValue(e.target.value)
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}  sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="admin"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={emailValue}
                            onInput={emailInputHandler}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="admin"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={passValue}
                            onInput={passInputHandler}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            disabled={isLoading}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="https://www.doge.crussaire.com/news?utm_source=linkedin" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.doge.crussaire.com/news?utm_source=linkedin" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    { errorMessage && <Grid container>
                        <Alert variant="outlined" severity="error" sx={{width: '100%'}}>
                            {errorMessage}
                        </Alert>
                    </Grid>}
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}
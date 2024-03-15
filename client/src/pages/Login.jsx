import React, { useState } from "react";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import {CameraAlt as CameraAltIcon} from "@mui/icons-material/CameraAlt";

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () =>  setIsLogin((prev) => !prev) ;
    return (
        <div>
            <Container component={"main"} maxWidth="xs" sx={
                {
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }
            }>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ? (
                        <>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            <form style={
                                {
                                    width: "100%",
                                    marginTop: "1rem",
                                }
                            } action="">
                                <TextField margin="normal" variant="outlined" required fullWidth label="Username" />
                                <TextField margin="normal" type="password" variant="outlined" required fullWidth label="Password" />
                                <Button sx={
                                    {
                                        marginTop: "1rem",
                                    }
                                } type="submit" fullWidth variant="contained" color="primary">
                                    Login
                                </Button>

                                <Typography textAlign={"center"} 
                                    m={
                                        "1rem"
                                    }
                                >
                                    OR
                                </Typography>
                                <Button  type="button" fullWidth variant="contained" color="primary"
                                    onClick={toggleLogin}
                                >
                                    Sign Up
                                </Button>

                            </form>
                        </>
                    ) : (
                        <>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <form style={
                                {
                                    width: "100%",
                                    marginTop: "1rem",
                                }
                            } action="">
                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar 
                                        sx={
                                            {
                                                width: "10rem",
                                                height: "10rem",
                                                objectFit: "contain",
                                            }
                                        }
                                    />
                                    <IconButton>
                                        <>
                                            <CameraAltIcon />   
                                        </>
                                    </IconButton>
                                </Stack>
                                <TextField margin="normal" variant="outlined" required fullWidth label="Name" />
                                <TextField margin="normal" variant="outlined" required fullWidth label="Username" />
                                <TextField margin="normal" variant="outlined" required fullWidth label="Bio" />
                                <TextField margin="normal" type="password" variant="outlined" required fullWidth label="Password" />
                                <Button sx={
                                    {
                                        marginTop: "1rem",
                                    }
                                } type="submit" fullWidth variant="contained" color="primary">
                                    Sign Up
                                </Button>

                                <Typography textAlign={"center"} 
                                    m={
                                        "1rem"
                                    }
                                >
                                    OR
                                </Typography>
                                <Button  type="button" fullWidth variant="contained" color="primary"
                                    onClick={toggleLogin}
                                >
                                    Login
                                </Button>

                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
}

export default Login;


// 46: 05//


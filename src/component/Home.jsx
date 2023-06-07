import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { theme } from "../App";
import { ThemeProvider } from "@emotion/react";
import { Paper } from "@mui/material";

export const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="homepage">
                <Box>
                    <Paper>
                        <Link href="/Contact">
                            <Button variant="contained">Contact</Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="contained">Logout</Button>
                        </Link>
                        <Link href="/profil">
                            <Button variant="contained">Profil</Button>                    
                        </Link>
                    </Paper>
                </Box>
                <Box>
                    <Typography sx={{ mt: 2}} variant="h3" color="primary">Welcome</Typography>
                    <Typography sx={{ mt: -1}} variant="h6" color="grey">How to learn React</Typography>
                    <div className="videos">
                        <p>Video 1</p>
                        <p>Video 2</p>
                        <p>Video 3</p>
                    </div>
                </Box>
                <Box>
                <p>React n’est pas à proprement parler un framework mais se présente comme une
                        <br/> bibliothèque JavaScript pour créer des interfaces utilisateurs.<br/>
                        React est la réponse de Facebook à un problème récurrent : créer des interfaces réutilisables et stateful.
                    </p>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

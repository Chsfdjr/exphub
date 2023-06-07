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

export const Register = () => {
    const [statue, Setstatue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const Handleclick = () => {
        if (email && password && nom && prenom) {
            Setstatue('True');
        } else {
            Setstatue('False')
        }
    }

    if (statue === 'True') {
        return <Redirect to="/"/>;
    }
    if (statue === 'False') {
        return (
            <ThemeProvider theme={theme}>
                <Container component="registerpage">
                    <Box>
                        <Box sx={{ mt: 9, mb: 2 }} component="form" onSubmit={Handleclick}>
                            <Typography sx={{ mb: 2 }} color="primary" component="h1" variant="h3">
                            Register
                            </Typography>
                            <p></p>
                            <Typography sx={{ mb: 2 }} color="error" component="text" variant="p">
                            Remplir l'ensemble des données
                            </Typography><p></p>
                            <label htmlFor="email">Email</label><p></p>
                            <TextField size="small" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><p></p>
                            <label htmlFor="Password">Password</label><p></p>
                            <TextField size="small" value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="**********"/><p></p>
                            <label htmlFor="Nom">Nom</label><p></p>
                            <TextField size="small" value={nom} onChange={(e) => setNom(e.target.value)}type="text" placeholder="Nom"/><p></p>
                            <label htmlFor="prenom">Prénom</label><p></p>
                            <TextField sx={{ mb: 3}} size="small" value={prenom} onChange={(e) => setPrenom(e.target.value)}type="text" placeholder="Prénom"/><p></p>
                            <Button sx={{ mr: 3 }} variant="contained" type="submit">Register</Button>
                            <Link color="inherit" href="/login" underline="hover">
                                Already an account ?
                            </Link>{' '}
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Container component="registerpage">
                    <Box>
                        <Box sx={{ mt: 9, mb: 2 }} component="form" onSubmit={Handleclick}>
                            <Typography sx={{ mb: 2 }} color="primary" component="h1" variant="h3">
                            Register
                            </Typography>
                            <p></p>
                            <label htmlFor="email">Email</label><p></p>
                            <TextField size="small" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><p></p>
                            <label htmlFor="Password">Password</label><p></p>
                            <TextField size="small" value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="**********"/><p></p>
                            <label htmlFor="Nom">Nom</label><p></p>
                            <TextField size="small" value={nom} onChange={(e) => setNom(e.target.value)}type="text" placeholder="Nom"/><p></p>
                            <label htmlFor="prenom">Prénom</label><p></p>
                            <TextField sx={{ mb: 3}} size="small" value={prenom} onChange={(e) => setPrenom(e.target.value)}type="text" placeholder="Prénom"/><p></p>
                            <Button sx={{ mr: 3 }} variant="contained" type="submit">Register</Button>
                            <Link color="inherit" href="/login" underline="hover">
                                Already an account ?
                            </Link>{' '}
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

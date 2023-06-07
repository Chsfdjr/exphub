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
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';
import { ThemeProvider } from "@emotion/react";
import { createSvgIcon } from '@mui/material/utils';

export const Contact = () => {
    const [statue, setStatue] = useState('');
    const [objet, setObjet] = useState('');
    const [msg, setMsg] = useState('');
    const HomeIcon = createSvgIcon(
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
        'Home',
      );

    const Handleclick = () => {
        if (objet && msg) {
            setStatue('send');
        } else
            setStatue('empty')
    }

    if (statue === 'send') {
        return (
            <div className="msgsend">
                <Typography sx={{ mt: 5, mb: 3 }}variant="h2" color="pink">Message send !</Typography>
                <Link href="/">
                    <Button variant="contained">Home</Button>                    
                </Link>
            </div>
        );
    }
    if (statue === 'empty') {
        return (
            <ThemeProvider theme={theme}>
                <Container component="contactpageerror">
                    <Link href="/" underline="none">
                        <Typography variant="h6">HOME</Typography>
                    </Link>
                    <Typography sx={{ mb: -1 }} color="grey" variant="h2">Contactez-nous !</Typography>
                    <Typography color="error">Remplir l'ensemble des données !</Typography>
                    <form onSubmit={Handleclick}>
                        <p></p>
                        <label htmlFor="email">Objet</label><p></p>
                        <TextField size="small"value={objet} onChange={(e) => setObjet(e.target.value)} type="text" placeholder="Objet" /><p></p>
                        <label htmlFor="text">Message</label><p></p>
                        <TextField size="small"value={msg} onChange={(e) => setMsg(e.target.value)}type="text" placeholder="Message"/><p></p>
                        <Button variant="contained" type="submit">Envoyer</Button>
                    </form>
                </Container>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Container component="contactpage">
                    <Link href="/" underline="none">
                        <Typography variant="h6">HOME</Typography>
                    </Link>
                    <Typography sx={{ mb: -1 }} color="grey" variant="h2">Contactez-nous !</Typography>
                    <form onSubmit={Handleclick}>
                        <p></p>
                        <label htmlFor="email">Objet</label><p></p>
                        <TextField size="small"value={objet} onChange={(e) => setObjet(e.target.value)} type="text" placeholder="Objet" /><p></p>
                        <label htmlFor="text">Message</label><p></p>
                        <TextField size="small"value={msg} onChange={(e) => setMsg(e.target.value)}type="text" placeholder="Message"/><p></p>
                        <Button variant="contained" type="submit">Envoyer</Button>
                    </form>
                </Container>
            </ThemeProvider>
        );
    }
}

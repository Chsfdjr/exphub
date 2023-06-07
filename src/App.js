import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { Profil } from "./component/Profil"
import { Register } from "./component/Register";
import { Contact } from "./component/Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';
import { blue, lightBlue, pink, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main:'#fd9ecb',
      lighter :'#ad9dfd',
    },
    secondary: {
      main: '#6630dd',
    },
    neutral: {
      main: '#8ecff6',
    },
    error: {
      main : '#d20020',
    }
  }
});

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/profil" component={Profil} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import SignUp from './components/signup'
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {amber} from '@material-ui/core/colors'
import NavTabs from './components/navbar'

const theme = createMuiTheme({
  palette: {
    primary : amber
  }
})

function App() {
  return (
    <MuiThemeProvider theme = {theme}>
    <div className="App">
      <NavTabs/>
      <SignUp />
    </div>
    </MuiThemeProvider>
  );
}

export default App;

import React from 'react';
import SignUp from './components/signup'
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {amber} from '@material-ui/core/colors'
import Popular from './components/popular';
// import NavTabs from './components/navbar'
// import Search from './components/Search';
// import Popular from './components/popular'
const theme = createMuiTheme({
  palette: {
    primary : amber
  }
})

function App() {
  return (
    <MuiThemeProvider theme = {theme}>
    <div className="App">
      <SignUp />
    </div>
    </MuiThemeProvider>
  );
}

export default App;

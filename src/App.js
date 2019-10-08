import React from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {amber} from '@material-ui/core/colors'
import Popular from './components/popular';
import ServiceHome from './components/serviceHome'
import Header from './components/Header'
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
      <Header/>
      <Popular />
      <ServiceHome/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;

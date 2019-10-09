import React from 'react';
import './App.css';
import Popular from './components/popular';
import ServiceHome from './components/serviceHome'
import Header from './components/Header'
import Search from './components/Search'
// import NavTabs from './components/navbar'
// import Search from './components/Search';
// import Popular from './components/popular'



function App() {
  return (
  
    <div className="App">
      <Header/>
      <Popular />
      <ServiceHome/>
      <Search/>
    </div>
  
  );
}

export default App;

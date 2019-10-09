import React from 'react';
import './App.css';
import Popular from './components/popular';
import ServiceHome from './components/serviceHome'
import Header from './components/Header'
// import NavTabs from './components/navbar'
// import Search from './components/Search';
// import Popular from './components/popular'



function App() {
  return (
  
    <div className="App">
      <Header/>
      <Popular />
      <ServiceHome/>
    </div>
  
  );
}

export default App;

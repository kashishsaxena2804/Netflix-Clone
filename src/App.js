import React from 'react';
import './App.scss';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <List/>
    </React.Fragment>
  );
}


export default App;

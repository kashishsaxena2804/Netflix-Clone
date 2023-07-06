import React from 'react';
import './App.scss';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
              <Login/>
          }/>
          <Route path="/dashboard" element={
              <React.Fragment>
                <Header/>
                <Banner/>
                <List/>
              </React.Fragment>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}


export default App;


import './style.css'; // css 넣을때 , className
import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Footer from './footer'
import  Sect from './sect.js'
import Header from './header'
import Login from './login'
import Main from './main'
import Goods from './goods'
import High from './high';

const App = () => { 

        return (
        
      
    
      <div>
        <High/>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/goods" element={<Goods/>}/>
        </Routes>
        <Footer/>
        </div>
      
    
    
        );
  
};

export default App;


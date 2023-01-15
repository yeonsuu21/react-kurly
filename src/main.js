import Sect from './sect.js'
import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import Banner from './banner'
import './style.css';
import './style4.css'
import Headerimg from './headerimg.js';
import Sidebar1 from './sidebar1.js';

const Main = () => { 

    return (
    
  <div>
  <Headerimg/>
  <Sidebar1/>
  <Sect/>
  
  <Banner/>
  <Sect/>
  </div>
    )

}

export default Main;


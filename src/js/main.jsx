import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron';
import MyCards from './components/MyCards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Jumbotron/>
    <MyCards/>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Login from './pages/Login';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Lato', sans-serif;
    }
    body {
      width: auto;
      margin: auto;
    }
`

root.render(
  <React.StrictMode>
    < GlobalStyle />
    <Router>
        <Header />
        <Routes>
            <Route exact path="/"
              element= {<Home />}
            />
            <Route path="/Login"
              element= { <Login/> }
            />
            <Route path="/Profil"
              element= {<Profil />}
            />
            <Route
              element= {<Error />}
            />
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

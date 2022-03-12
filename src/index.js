import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import SignIn from './Components/SignIn'
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import Reward from './Components/Reward';
import Work from './Components/Work';
import Banner from './Components/Banner';
import ProductsPanel from './Components/ProductsPanel';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import MenuIconButton from './Components/MenuIconButton';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Menu/>
    {/* <MenuIconButton/> */}
    <Banner/>
    {/* <Login /> */}
    {/* <SignIn/> */}
    <Reward/>
    <Work/>
    <ProductsPanel type="display"/>
    <ProductsPanel type="fav"/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

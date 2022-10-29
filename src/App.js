import React from 'react'
import Header from './components/Header.js'
import Products from './components/Products.js'
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { DataProvider } from "./components/DataProvider"
import Details from './components/Details';
import Cart from './components/Cart';
//import Footer from './components/Footer';
import Checkout from './components/Checkout.js'
import Electronics from './components/Electronics.js'
import Men from './components/Men.js'
import Women from './components/Women.js'
import Jewelry from './components/Jewelry.js'

export default function App() {

  
  

  return (
    <DataProvider> 
    <div className="page-container">
      <div className='content-wrap'>
    <Router>
     <Header/>

      <section>
      <Routes>
        <Route path="products" element={ <Products/> }/> 
        <Route path="products/:id" element={ <Details/> }/> 
        <Route path="cart" element={<Cart/>}/>
        <Route path="/payment" element={<Checkout/>}/>
        <Route path="electronics" element={<Electronics/>}/>
        <Route path="women's clothing" element={<Women/>}/>
        <Route path="men's clothing" element={<Men/>}/>
        <Route path="jewelry" element={<Jewelry/>}/>
      </Routes>
      </section>
      </Router>
      </div>
    </div>
    {/*<Footer />*/}
   </DataProvider>
  );
}




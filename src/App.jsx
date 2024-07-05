import React from 'react'
// import {browser}
import './App.css'
import Nav from './Navbar/Nav'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { assets } from './assets/assets'
import Shoes from './components/Shoes/Shoes'
import Menu from './components/Menu/Menu'
import Placeorder from './components/Placeorder/Placeorder'
import Home from './components/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element=  {<Home/>}/>
        <Route path='/shoes' element=  {<Shoes/>}/>
        <Route path='/menu' element=  {<Menu/>}/>
        <Route path='/placeorder' element=  {<Placeorder/>}/>
      </Routes>

    </div>
  )
}

export default App

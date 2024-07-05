import React, { useState } from 'react'
import './Nav.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Nav = () => {
  const[menu,setmenu]=useState('none')
  return (
    <div className='navbar'>
         
            <img src={assets.logo} alt="" />
        
        
            <ul className='navbar-menu'>
                <Link to={'./'} onClick={()=>setmenu("home")}className={menu==="home"?"active":""}>Home</Link>
                <li onClick={()=>setmenu("shoes")}className={menu==='shoes'?"active":""}>Shoes</li>
                <li onClick={()=>setmenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setmenu("about-us")}className={menu==="about-us"?"active":""}>About Us</li>
                <li onClick={()=>setmenu("contact")}className={menu==="contact"?"active":""}>Contact Us</li>
            </ul>
       
        <div className='navbar-right'>
            
            <img className='search-icon' src={assets.search_icon}  />
            <div className="basket-icon">
                <img src={assets.basket_icon} alt=""  />
                </div>
            <button >Sign In</button>
        </div>



    </div>
  )
}

export default Nav

import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StyleHTMLAttributes } from 'react'
import logo from "../Resources/logo3.png"
import "./style.css"
import { useState } from 'react'

const Header = () =>{
  // let searchInput = "Pokemon"
  const [searchInput, setSearchInput] = useState("")
    return(
   <>
<header className="header">
  <div className="logo">
  <a href="#"><img src={logo}/></a>
  </div>  
  <nav className="searchContainer">
    <input type="search" className='search' placeholder='Search bye name' value={searchInput} onChange = {(e) => {
      // searchInput = e.target.value
      setSearchInput(e.target.value)
      console.log(searchInput);
    }} ></input>
    <button className='btn'>&#128269;</button>
  </nav>
</header>
</> 
    
    )
      
    
}

export default Header;
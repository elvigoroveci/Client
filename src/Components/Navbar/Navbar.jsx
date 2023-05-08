import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <header>
      <div className='Navbar'>
          <div className='logo'>
              <h2>Furniture</h2>
          </div>
          <div className='menu'>
              <ul className='list'>
                  <a><li>Home</li></a>
                  <a><li>Services</li></a>
                  <a><li>Doctors</li></a>
                  <a><li>Products</li></a>
                  <a><li>Gallery</li></a>
              </ul>
          </div>
      </div>
    </header>
  )
}

export default Navbar;

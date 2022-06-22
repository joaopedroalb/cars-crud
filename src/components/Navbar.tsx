import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer } from '../styles/components'

export default function Navbar() {
  return (
    <NavbarContainer isDark={true}>
        <nav className='linksContainer'>
            <Link to="/" className='linkItem'>
                Home
            </Link>
            <Link to="/create" className='linkItem'>
                Create
            </Link>
        </nav>
        <footer>
            <p>Mode</p>
        </footer>
    </NavbarContainer>
  )
}

import React from 'react'
import { NavbarContainer } from '../styles/components'

export default function Navbar() {
  return (
    <NavbarContainer isDark={true}>
        <nav className='linksContainer'>
            <p>Home</p>
            <p>Create</p>
        </nav>
        <footer>
            <p>Mode</p>
        </footer>
    </NavbarContainer>
  )
}

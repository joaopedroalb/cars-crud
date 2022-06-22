import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer } from '../styles/components'
import {AiFillHome} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'
import {MdDarkMode,MdLightMode} from 'react-icons/md'

export default function Navbar() {
  return (
    <NavbarContainer isDark={true}>
        <nav className='linksContainer'>
            <Link to="/" className='linkItem'>
                <AiFillHome size={40}/>
            </Link>
            <Link to="/create" className='linkItem'>
                <IoMdAddCircle size={40}/>
            </Link>
        </nav>
        <footer>
            <MdLightMode size={40} className='linkItem'/>
        </footer>
    </NavbarContainer>
  )
}

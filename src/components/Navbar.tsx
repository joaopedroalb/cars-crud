import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer } from '../styles/components'
import {AiFillHome} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
import { ThemeContext } from '../context/ThemeContext'


export default function Navbar() {

    const {isDark,setIsDark} = useContext(ThemeContext)

    return (
        <NavbarContainer isDark={isDark}>
            <nav className='linksContainer'>
                <Link to="/" className='linkItem'>
                    <AiFillHome size={40}/>
                </Link>
                <Link to="/create" className='linkItem'>
                    <IoMdAddCircle size={40}/>
                </Link>
            </nav>
            <footer>
                {isDark?(
                    <MdLightMode size={40} onClick={()=>setIsDark(false)} className='linkItem'/>
                ):
                (
                    <MdDarkMode size={40} onClick={()=>setIsDark(true)} className='linkItem'/>
                )}
            </footer>
        </NavbarContainer>
    )
}

import React from 'react'
import { LayoutPageBG } from '../styles/components'
import Navbar from './Navbar'

type LayoutPageProps ={
    children: React.ReactNode
}

export default function LayoutPage({children}:LayoutPageProps) {
  return (
    <LayoutPageBG>
        <Navbar/>
        {children}
    </LayoutPageBG>
  )
}

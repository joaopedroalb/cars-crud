import React, { useContext } from 'react'
import { LayoutPageBG, PageContainer } from '../styles/components'
import Navbar from './Navbar'
import { ThemeContext } from '../context/ThemeContext'

type LayoutPageProps ={
    children: React.ReactNode
}

export default function LayoutPage({children}:LayoutPageProps) {

    const {isDark} = useContext(ThemeContext);

    return (
        <LayoutPageBG>
            <Navbar/>
            <PageContainer isDark={isDark}>
                {children}
            </PageContainer>
        </LayoutPageBG>
    )
}

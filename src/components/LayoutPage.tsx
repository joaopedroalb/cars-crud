import React from 'react'
import { LayoutPageBG, PageContainer } from '../styles/components'
import Navbar from './Navbar'

type LayoutPageProps ={
    children: React.ReactNode
}

export default function LayoutPage({children}:LayoutPageProps) {
  return (
    <LayoutPageBG>
        <Navbar/>
        <PageContainer isDark={true}>
            {children}
        </PageContainer>
    </LayoutPageBG>
  )
}

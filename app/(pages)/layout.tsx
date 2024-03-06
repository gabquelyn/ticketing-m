import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Navigation from '../atoms/Navigation';
export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Header/>
        <div className='pt-[3rem]'>
        <Navigation/>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

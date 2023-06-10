import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <div className='relative top-14'>
    {children}
    </div>
    
    </>
  )
}

export default Layout
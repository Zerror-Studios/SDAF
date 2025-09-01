import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Loader from './common/Loader'

const Layout = ({ children }) => {
    return (
        <div>
            <header><Header /></header>
            <Loader/>
            <main>{children}</main>
            {/* <footer><Footer /></footer> */}
        </div>
    )
}

export default Layout
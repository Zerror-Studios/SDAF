import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <header><Header /></header>
            <main>{children}</main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Layout
import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import IntroLoader from './common/IntroLoader'

const Layout = ({ children }) => {
    return (
        <div>
            <header><Header /></header>
            <IntroLoader />
            <main>{children}</main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Layout
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cart from './Cart'
import { Logo } from './Logo'

export const Nav = () => {
    const [scroll, setScroll] = React.useState(false);
    const scrollCheck = ()=>{
        let scrollOffset = window.scrollY;
        setScroll(scrollOffset>80);
    }

    React.useEffect(()=>{
        window.addEventListener("scroll",scrollCheck);
    }, [])
    return (
        <nav className={`w-full bg-yellow-400 flex flex-row justify-between h-20 shadow-xl ${scroll?'fixed top-0 left-0 z-30':''}`}>
            <Logo/>
            <Cart/>
        </nav>
    )
}

Nav.propTypes = {
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

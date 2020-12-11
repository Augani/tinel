import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Logo = (props) => {
   
    return (
        <a href="/" className="flex flex-col m-3">
            <h1 className="text-white text-2xl p-0 antialiased font-bold m-0">Tinel</h1>
            <h1 className="text-black pl-5 font-semibold antialiased p-0 m-0">WorkShop</h1>
        </a>
    )
}

Logo.propTypes = {
   
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)

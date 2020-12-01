import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Card = (props) => {
    return (
        <div className={`${props.className} relative w-full flex flex-col h-72`}>

        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    categoryIcon: PropTypes.func,
    date: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

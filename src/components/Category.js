import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Category = (props) => {
    return (
        <div className={`flex flex-row items-center m-2`}>

        </div>
    )
}

Category.propTypes = {
    active: PropTypes.bool,
    title: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)

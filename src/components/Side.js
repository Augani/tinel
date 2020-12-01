import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Side = () => {
    return (
        <div className="w-full h-full flex flex-col">
                <h2 className="font-semibold text-gray-700">Filter by category</h2>
        </div>
    )
}

Side.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Side)

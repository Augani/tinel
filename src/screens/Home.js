import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Nav from '../components/Nav'

export const Home = () => {
    
    return (
        <div className="w-screen h-screen flex flex-col font-sans">
            <Nav/>
            <main className="w-full h-full grid grid-cols-4">
            <aside className="col-span-1 bg-red-300 h-full">

            </aside>
            <section className="col-span-3 h-full bg-blue-400">
            
            </section>
        </main>    
        </div>
    )
}



const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

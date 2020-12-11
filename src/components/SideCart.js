import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartCard  from './CartCard'

const SideCart = (props) => {
    return (
        <div className="w-1/4 h-screen absolute right-0 top-0 z-30 bg-white px-2 py-4">
            <div className="flex flex-row items-center justify-between">
    <h2 className='text-lg text-black font-semibold'>{props.cart.length} Workshops</h2>
    <h1 onClick={props.close} className="text-xl font-black pointer ">x</h1>
            </div>
            {props.cart.length?props.cart.map((p,ind)=>(<CartCard key={ind} data={p}/>)):null}
       <div className="w-full p-2">
        <h1 className="text-black font-bold">SUBTOTAL</h1>
    <h2>{props.cart.reduce((m,n)=>m.price + n.price)}</h2>
       </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideCart)

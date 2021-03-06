import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

export const Cart = ({ cart, newItemAdded, workshops, cartOpen }) => {
        
  return (
    <div onClick={()=>cartOpen()} className={`flex flex-row w-1/2 lg:w-1/3 justify-end lg:mr-0 mr-3 lg:justify-center h-full items-center ${cart.length?'pointer':'pointer-events-none'}`}>
      <div className="relative">
        <FiShoppingCart className="text-black text-xl cursor mr-2" />
        {newItemAdded ? (
          <div className="bg-blue-400 h-3 w-3 rounded-full absolute top-0 right-0"></div>
        ) : null}
      </div>
      {cart.length ? cart.length : <EmptyCart />}
    </div>
  );
};

const EmptyCart = () => {   
  return (
    <h3 className="text-black hidden lg:flex font-semibold antialiased">Cart is empty</h3>
  );
};



const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

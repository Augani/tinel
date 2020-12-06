import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BiCalendarWeek, BiTime } from "react-icons/bi";
import { IoBrushOutline } from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import { withRouter } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <div
      className={` relative rounded-md transform transition-all duration-300  shadow-2xl w-full flex flex-row lg:flex-col`}
    >
      <section className="w-2/5 lg:w-full flex-grow overflow-hidden flex flex-col mb-3 rounded-l-md lg:rounded-t-md lg:h-40">
     <a href={`/details/${data.id}`}>
     <img
        alt="Workshop"
        src={data.imageUrl}
        className=" object-cover"
      />
     </a>
      </section>
      <section className="w-3/5 lg:w-full flex flex-col  px-4 lg:px-10 py-6 min-h-full relative">
        <div className="absolute z-10 -left-7  lg:right-1 lg:left-auto  top-3 lg:-top-6 shadow-xl bg-black h-10 w-10 flex flex-col items-center justify-center rounded-md right-4">
          <IoBrushOutline className="text-white text-xl" />
        </div>
        <div className="flex mb-2 flex-row  items-center w-full">
          <p className="font-black text-gray-800 mr-4 text-sm md:text-lg flex flex-row justify-around items-center">
            <BiCalendarWeek />
            {new Date(data.date).getDate()}.{new Date(data.date).getMonth()}.
            {new Date(data.date).getFullYear()}.
          </p>
          <p className="font-black text-gray-800 text-sm md:text-lg flex flex-row justify-around items-center">
            <BiTime />
            {new Date(data.date).getUTCHours()}:
            {new Date(data.date).getUTCMinutes()}h
          </p>
        </div>
        <div className="w-full mb-3 flex flex-col px-2">
          <h3 className="lg:text-2xl text-xl text-blue-400 font-black"><a href={`/details/${data.id}`}>{data.title}</a></h3>
        </div>
        <div className="w-full mb-3 flex flex-col px-2">
          <h3 className="text-2xl lg:text-3xl tracking-tight text-gray-800 font-black">
            {data.price.toFixed(2)}
            <span className=" font-bold ml-1 text-sm">EUR</span>
          </h3>
        </div>
        <div className="w-full hidden lg:flex flex-col items-center px-2">
          <button className="uppercase text-center w-full hover:bg-yellow-500 bg-yellow-400 shadow-xl rounded-md h-10 lg:h-14 text-black font-bold tracking-wider">
            Add to cart
          </button>
        </div>
        <div className="absolute bottom-5 right-2 h-12 w-12 bg-yellow-400 rounded-md flex flex-col justify-center lg:hidden items-center shadow-lg">
              <FiShoppingCart className="text-3xl"/>
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  categoryIcon: PropTypes.func,
  date: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));

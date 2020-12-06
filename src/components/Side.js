import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BsCode, BsReverseLayoutTextWindowReverse, BsLightning } from "react-icons/bs";
import { IoBrushOutline } from "react-icons/io5";

export const Side = (props) => {
  return (
    <div className={`w-full h-full flex fixed flex-col pl-2 ${props.className}`}>
      <h2 className="font-semibold text-gray-700 mb-3 pl-4 w-full">
        Filter by category:
      </h2>
      <ul className="w-full flex flex-col pl-4">
        <li
          onClick={() => props.reset()}
          className="text-gray-800 cursor-pointer text-xl pl-8 mb-3 font-bold tracking-wider"
        >
          All
        </li>
        {props.data.length?props.data.map((c,ind)=>(<Category key={ind} name={c} onclick={()=>props.filterCategories(c)}/>)):null}
      </ul>
    </div>
  );
};

function Category(props) {
  const Icon = (name) => {
    switch (name) {
      case "marketing":
        return <BsLightning className="mr-2" />;
      case "backend":
        return <BsCode className="mr-2" />;
      case "frontend":
        return <BsReverseLayoutTextWindowReverse className="mr-2" />;
      case "design":
        return <IoBrushOutline className="mr-2" />;
      default:
        return null;
    }
  };
  return <li onClick={props.onclick} className="flex flex-row items-center text-xl mb-3 text-gray-800 cursor-pointer font-bold tracking-wider">{Icon(props.name)}{props.name}</li>;
}

Side.propTypes = {
  reset: PropTypes.func,
  data: PropTypes.array,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Side);

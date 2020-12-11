import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

export const List = (props) => {
  console.log(props)
  let list = props.list;
  console.log(list.length)
  if(list && list.length)list = list.sort((m, v) => new Date(v.date) - new Date(m.date));
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2  gap-4 place-items-center">
      {list && list.length
        ? list.map((shop, ind) => <Card key={ind} data={shop} />)
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { List } from "../components/List";
import { GetRequest } from "../Request";
import { addWorkshops, addCategories, viewWorkshop } from "../actions";
import { Side } from "../components/Side";
import { withRouter } from "react-router-dom";
import { BiCalendarWeek, BiTime } from "react-icons/bi";
import { IoBrushOutline } from "react-icons/io5";

export const Detail = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const [WorskopData, setWorkShopData] = React.useState({});
  const [user, setUser] = React.useState("");
  const [Total, setTotal] = React.useState(0);

  const fetchUser = (userId) => {
    GetRequest(`/users/${userId}`)
      .then((data) => {
        setUser(JSON.parse(data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    GetRequest(`/workshops/${id}`)
      .then((data) => {
        var ret = JSON.parse(data);
        props.viewWorkshop(ret);
        setWorkShopData(ret);
        fetchUser(ret.userId);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const OptionsSelect = Array(20).fill(0);
  const calculate = (r)=>{
      setTotal(WorskopData.price * r.target.value);
  }
  return (
    <div className="w-screen h-screen flex flex-col font-sans">
      <Nav />
      <main className="w-full grid grid-cols-1 lg:grid-cols-4 overflow-x-hidden">
        <header className="col-span-4 h-10"></header>
        <aside className="col-span-1 h-full"></aside>
        <section className="col-span-3 flex flex-col px-4">
          <div className="w-full h-52 overflow-y-hidden mb-3 rounded-lg">
            <img
              alt="detailImage"
              className="rounded-lg object-center"
              src={WorskopData.imageUrl}
            />
          </div>
          <section className="w-full grid grid-cols-4 ">
            <div className="col-span-3 flex flex-col pr-4">
              <div className="w-full flex flex-row items-center mb-3">
                <div className=" shadow-xl mr-3 bg-black h-10 w-10 flex flex-col items-center justify-center rounded-md ">
                  <IoBrushOutline className="text-white text-xl" />
                </div>
                <div className="flex flex-row  items-center w-full">
                  <p className="font-black text-gray-800 mr-4 text-sm md:text-lg flex flex-row justify-around items-center">
                    <BiCalendarWeek />
                    {new Date(WorskopData.date).getDate()}.
                    {new Date(WorskopData.date).getMonth()}.
                    {new Date(WorskopData.date).getFullYear()}.
                  </p>
                  <p className="font-black text-gray-800 text-sm md:text-lg flex flex-row justify-around items-center">
                    <BiTime />
                    {new Date(WorskopData.date).getUTCHours()}:
                    {new Date(WorskopData.date).getUTCMinutes()}h
                  </p>
                </div>
              </div>
              <h1 className="text-4xl mb-2 text-blue-400 font-black tracking-wide capitalize">
                {WorskopData.title}
              </h1>
              <small className="text-lg tracking-wider mb-3 font-semibold">
                WITH {user.name}
              </small>
              <p className="antialiased text-sm flex-wrap">
                {WorskopData.desc}
              </p>
            </div>
            <div className="col-span-1 flex flex-col py-2 pr-2">
              <div className="w-full flex p-3 flex-col shadow-md rounded-md ring-1 ring-gray-400 h-64 ring-opacity-10">
                <h2 className="font-semibold text-2xl mb-2">Buy your ticket</h2>
                <h3 className="text-4xl font-black mb-2">
                  {WorskopData.price}
                  <small className="text-lg font-semibold">EUR</small>
                </h3>
                <div className="w-full flex flex-row items-center">
                  <select
                    defaultValue={1}
                    onChange={calculate}
                    className="ring-2 mr-2 h-10 w-10 text-lg text-gray-900 rounded-lg ring-blue-400"
                  >
                    {OptionsSelect.map((p, ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                       <button className="text-lg hover:bg-yellow-500 shadow-lg rounded-md uppercase font-bold tracking-wide h-10 bg-yellow-400 px-2 flex-grow text-gray-900">add to cart</button> 
                </div>
                <div className="grid grid-cols-3">
                        <div className="col-span-1"></div>
                        <div className="col-span-2">
                    <small className=" text-gray-500">Subtotal: {Total}</small>

                        </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  addWorkshops,
  addCategories,
  viewWorkshop,
};

const EDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));

export default EDetail;

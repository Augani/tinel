import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { List } from "../components/List";
import { GetRequest } from "../Request";
import { addWorkshops, addCategories } from "../actions";
import { Side } from "../components/Side";
import { withRouter } from "react-router-dom";

export const Home = (props) => {
    console.log(props)
  const [datar, setDatar] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    GetRequest("/workshops")
      .then((data) => {
        props.addWorkshops(JSON.parse(data));
        setDatar(JSON.parse(data));
      })
      .catch((e) => {
        console.log(e);
      });
    GetRequest("/categories")
      .then((data) => {
        props.addCategories(JSON.parse(data));
        setCategories(JSON.parse(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const Reset = ()=>{
      setDatar(props.workshops)
  }
  const Filter = (name)=>{
      console.log(props.workshops)
        let filtered = props.workshops.filter(i=>i.category == name);
        console.log(filtered)
        setDatar(filtered)
  }
  return (
    <div className="w-screen h-screen flex flex-col font-sans">
      <Nav />
      <main className="w-full grid grid-cols-1 lg:grid-cols-4 overflow-x-hidden">
        <header className="col-span-4 grid grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3 grid grid-cols-3  py-5 place-items-start">
           <div className="col-span-1">
           <h1 className="text-lg lg:text-3xl font-black tracking-wider">Workshops</h1>
            <small className="lg:text-lg text-gray-500 font-bold tracking-wider">
              Displayed:<span className="text-gray-900">{datar.length}</span>
            </small>
           </div>
          </div>
        </header>
        <aside className="col-span-1 h-full">
            <Side className="hidden lg:block" data={categories} reset={Reset} filterCategories={Filter}/>
        </aside>
        <section className="col-span-3 ">
          {datar.length ? (
            <List list={datar} />
          ) : (
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            ></svg>
          )}
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
  addCategories
};

const EHome = connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

export default EHome;

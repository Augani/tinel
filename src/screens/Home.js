import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import List from "../components/List";
import { GetRequest } from "../Request";
import { addWorkshops, addCategories } from "../actions";
import Side from "../components/Side";
import { withRouter } from "react-router-dom";

export const Home = (props) => {
  const [datar, setDatar] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(9);
  const [lastNumber, setLastNumber] = React.useState(false);


  React.useEffect(()=>{
    let datam = [];
if (!datar.length){
  GetRequest(`/workshops?_page=${page}&_limit=${limit}`)
  .then((data) => {
    datam = JSON.parse(data);
  
    if (!datam.length) {
      return setLastNumber(true);
    }
     props.addWorkshops(datam);
    let y = datar;
   
    y.push(...datam);
  
    setDatar(y);
   
  })
  .catch((e) => {
    console.log(e);
  });
}

return ()=>{
  setPage(page + 1);
  console.log(page, datam.length)
  if (datam.length < 9) {
    setLastNumber(true);
    
  }
}
  })
 

  React.useEffect(() => {
   if(!datar.length){
    //  FetchData();
   }
    getCategories();
  }, []);

  const getCategories = ()=>{
    GetRequest("/categories")
    .then((data) => {
      if (!data.length) return;
      props.addCategories(JSON.parse(data));
      setCategories(JSON.parse(data));
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const Reset = () => {
    setDatar(props.workshops);
  };
  const Filter = (name) => {
    let filtered = props.workshops.filter((i) => i.category === name);
    setDatar(filtered);
  };

  const FetchData = () => {
    GetRequest(`/workshops?_page=${page}&_limit=${limit}`)
      .then((data) => {
        data = JSON.parse(data);
      
        if (!data.length) {
          return setLastNumber(true);
        }
         props.addWorkshops(data);
        let y = datar;
       
        y.push(...data);
      
        setDatar(y);
        setPage(page + 1);
        if (data.length < 9) {
          setLastNumber(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    let scroll = localStorage.getItem("scroll");
    if (scroll) window.scrollTo(0, scroll);
    localStorage.setItem("scroll", 0);
  });

  
  return (
    <div className="h-full flex flex-col font-sans">
      <Nav />
      <main className="w-full grid h-full grid-cols-1 lg:grid-cols-4 ">
        <header className="col-span-4 grid grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3 grid grid-cols-3  py-5 place-items-start">
            <div className="col-span-1">
              <h1 className="text-lg lg:text-3xl font-black tracking-wider">
                Workshops
              </h1>
              <small className="lg:text-lg text-gray-500 font-bold tracking-wider">
                Displayed:<span className="text-gray-900">{datar.length}</span>
              </small>
            </div>
          </div>
        </header>
        <aside className="col-span-1">
          <Side
            className="hidden lg:flex"
            data={categories}
            reset={Reset}
            filterCategories={Filter}
          />
        </aside>
        <section className="col-span-3 flex flex-col py-4">
          {datar.length ? (
            <List list={datar} />
          ) : (
            <div className="h-10 w-10 border-dotted-2 animate-spin border-yellow-500 rounded-full"></div>
          )}

          {!lastNumber ? <LoadMore fetch={FetchData} /> : null}
        </section>
      </main>
    </div>
  );
};

function LoadMore({ fetch }) {
  return (
    <div className="w-full flex flex-row justify-center z-20">
      <button
        onClick={() => fetch()}
        className="h-10  w-1/2 bg-yellow-400 rounded-md shadow-lg text-lg font-bold"
      >
        Load more
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  addWorkshops,
  addCategories,
};

const EHome = connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

export default EHome;

import React, { Component } from 'react'
import { connect } from 'react-redux'

export const CartCard = (props) => {
    const [WorskopData, setWorkShopData] = React.useState(props.data);
    const [user, setUser] = React.useState("");
    const [Total, setTotal] = React.useState(0);
    const OptionsSelect = Array(20).fill(0);
    const calculate = (r)=>{
        setTotal(WorskopData.price * r.target.value);
    }
    return (
        <div className="w-full flex flex-row mx-1 shadow-lg rounded-md h-36 mb-2">
                <div className="w-1/2 h-full">
                    <img alt="cardphoto" className="object-cover h-full" src={props.data.imageUrl}/>
                </div>
                <div className="w-1/2 flex flex-col p-2">
                <h4 className="text-lg text-blue-400">{props.data.title}</h4>
                <div className="w-full flex flex-row items-baseline">
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
                  <h4 className="text-black text-xl tracking-wider font-black">{props.data.price}<small>EUR</small></h4>
                </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)

import React from 'react'
import staticData from "../shared/constant/ConstantData"
import './external.css'
import mymodulecss from './mymodulecss.module.css'


const MyCssComp = () => {
    


    const txt1Obj ={
        color:true ? "green":"red",
        fontSize:false? "20px":"30px",
        backgroundColor:true?"grey":"lightblue",
    }
    return (
        <>
            <h2 style={{color:"blue",backgroundColor:"aqua"}}>This is MyCssComp Component</h2>
            <p style={txt1Obj}>Hello all welcome you</p>
            <img className='imgProp' src={staticData.mountain} alt="Mountain"  />{" "} &nbsp;<br />
            <img className={mymodulecss.box} src={staticData.Panda} alt="panda" />

        </>
    )
}

export default MyCssComp

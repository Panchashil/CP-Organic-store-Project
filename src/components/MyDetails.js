import React, { Component } from "react";

class MyDetails extends Component{

    constructor(){
        super();
        this.state={
            gender:"Male",
            marital :"single",
            address:"chennai"
            
        }
    }

    render(){
                const {gender,marital,address} = this.state //destucting os state
                const {fname,lname,email,contact} = this.props //destucting os props

        return <div>
            <h2>This is a Task Component</h2>
            {/* accessing props data */}
            <p>My name is: {fname}, And I'm a : {lname},my email {email}, my number is :{contact}</p>
               {/* accessing state data */}
            {/* <p>Company name is : {this.state.company}, and my salary is : {this.state.salary}</p> */}
            <p>My gender is  : {gender}, and my address is : {address},mariratl stauts is : {marital}</p>
            </div>
    }

}
export default MyDetails;


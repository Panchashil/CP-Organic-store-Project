import React, { Component } from "react";

class ClassComp extends Component{

    constructor(){
        super();
        this.state={
            company:"changepond",
            salary:300000
        }
    }

    render(){
                const {company,salary} = this.state //destucting os state
                const {myName,post} = this.props //destucting os props

        return <div>
            <h2>This is a Class Component</h2>
            {/* accessing props data */}
            <p>My name is: {myName}, And I'm a : {post}</p>
               {/* accessing state data */}
            {/* <p>Company name is : {this.state.company}, and my salary is : {this.state.salary}</p> */}
            <p>Company name is : {company}, and my salary is : {salary}</p>
            </div>
    }

}
export default ClassComp;





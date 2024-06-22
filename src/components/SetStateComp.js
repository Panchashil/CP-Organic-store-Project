import React, { Component } from "react";

class SetStateComp extends Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
            name:"suresh"
        }
    }
    counterInc = ()=>{
        this.setState({count: this.state.count + 1});
    }
    counterName = ()=>{
        this.setState({name: this.state.name + "manikandan"});
    }
    // counterInc = ()=>{
    //     this.setState({count: this.state.count-1});
    // }

    render(){
        return (
        <div>
            <h2>This is setstatecomponent </h2>
            <p>Name : <strong>{this.state.name}</strong></p>
            <p>Count value : <strong>{this.state.count}</strong></p>
            <button type="button" onClick={()=>this.counterInc()}>Count++</button> &nbsp;
            <button type="button" onClick={()=>this.counterName()}>Name Add</button>
        </div>)
    }

}
export default SetStateComp;


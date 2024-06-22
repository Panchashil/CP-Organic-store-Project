
import React, { Component, Fragment } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             empName:"suresh",
             empSalary:90000
        }
    }
    changeData1 = ()=>{
        this.setState({empName: this.state.empName + "manikandan"});
    }
    changeData = ()=>{
        this.setState({empSalary: this.state.empSalary + 1000});
    }
    
    render() {
        return (
            <Fragment>
                <h2>
                    This is parent Component
                </h2><hr></hr>
                <p>Employee name is: {this.state.empName} and salary is : {this.state.empSalary}</p>
                <button type='button' onClick={()=>this.changeData1()}>ChangeDataName</button>
                <button type='button' onClick={()=>this.changeData()}>ChangeData</button>
                <ChildComp name={this.state.empName} salary={this.state.empSalary} changeData={this.changeData} />
            </ Fragment>
        )
    }
}

export default ParentComp;



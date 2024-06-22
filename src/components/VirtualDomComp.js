import React, { Component } from 'react'
import staticData from '../shared/constant/ConstantData'
class VirtualDomComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             breakFast:[{id:1,name:"Friedrice"},{id:2,name:"Dosa"},{id:3,name:"Idly"},{id:4,name:"Biriyani"}],
        }
        // setTimeout(() => {
        //     let breakFastArray = this.state.breakFast;
        //     let itemIndex = this.state.breakFast.findIndex(()=>{val.id===3})
        //     // let item = this.state.breakFast.find(()=>{val.itemIndex})
        //         this.setState(breakFastArray);
        // }, 3000);
    }
    
    render() {
        return (
            <div>
                <h2>This is VirtualDom Component</h2>
                <ul>
                    {this.state.breakFast.map((val,index)=>{
                        return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default VirtualDomComp

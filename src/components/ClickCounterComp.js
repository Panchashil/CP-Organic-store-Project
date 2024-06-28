import React, { Component } from 'react'
import HocComp from './HocComp'
import { Button } from '@mui/material'

class ClickCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // CountInc(){
    //     this.setState({count: this.state.count + 1});
    // }
    
    render() {
        return (
            <div>
                <h2>This is a clickcounter</h2>
                <p className='text-primary'>Count : {this.props.Count}</p>
                {/* <button className='btn btn-primary' type='button' onClick={()=>this.props.countInc()}>CLick</button> */}
                <Button variant="contained" onClick={()=>this.props.countInc()}>Counter ++</Button>
                
            </div>
        )
    }
}


export default HocComp(ClickCounterComp)

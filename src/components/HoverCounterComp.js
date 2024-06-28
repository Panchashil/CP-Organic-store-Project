import React, { Component } from 'react'
import HocComp from './HocComp';

class HoverCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // Hoverme(){
    //     this.setState({count: this.state.count + 1});
    // }
    
    render() {
        return (
            <div>
                {/* <h2>Hover On Me :{()=>this.Hoverme()}</h2> */}
                {/* <h2 onMouseOver={()=>this.Hoverme()}>Hoverme {this.state.count}</h2> */}
                <h2>Hover On Me :{this.props.Count}</h2>
                <h2 onMouseOver={()=>this.props.countInc()}>Hoverme</h2>
            </div>
        )
    }
}

export default HocComp(HoverCounterComp)

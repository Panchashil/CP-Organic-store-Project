import React, { Component } from 'react'

const HocComp = (WraperComp) => {

    class Hoc extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        CountInc(){
            this.setState({count: this.state.count + 1});
        }
        

            render(){

                return <WraperComp Count={this.state.count} countInc={()=>this.CountInc()}></WraperComp>
            }

    }return Hoc
}
    

export default HocComp

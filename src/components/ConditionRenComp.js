import React, { Component } from "react"

class ConditionRenComp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            iscond: true
        }

    }

    render() {

        //1.Use of IF ELSE Condition
        //1.Use of element as variable
        // let msg="";
        // if (this.state.iscond) {
        //     // return (
        //     //     <h2>Admin login successfully</h2>
        //     // )
        //     msg = "Admin logged successfull";
        // }
        // else {
        //     // return (
        //     //     <h2>Your are not admin</h2>
        //     // ) 
        //     msg = "User login successfull";
        //     }
        // 3.use of ternary operator
        //     return <h2>{msg}</h2>
        // return !this.state.iscond ? <h2>Admin login </h2> : <h2>User login </h2>
         // 4.use of short circuit
         return this.state.iscond && <h2>Admin logged </h2>
        }

}
export default ConditionRenComp;

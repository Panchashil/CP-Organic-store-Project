import React,{Component, component} from "react";


class MethodEventComp extends Component{

    greeting = ()=>{
        window.alert("Good Afternoon");
    }

    welcome = (...std)=>{
        window.alert(`welcome you ${std}`);

    }

    render(){
        return <div>
            <h2>This is method event component</h2>
            <button type="button" onClick={()=>this.greeting()}>Greeting</button> &nbsp;
            <button type="button" onClick={()=>this.welcome("Suresh")}>Welcome</button> &nbsp;
            <h2 onMouseOver={()=>this.greeting()}>Hover On me To Call Greeting</h2>
        </div>
    }

}
export default MethodEventComp;
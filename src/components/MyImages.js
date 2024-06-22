import React, { Component } from "react"
import images from '../shared/images/jpg_44-2.jpg'
import image1 from '../shared/images/tiger-jpg.jpg'
import staticData from "../shared/constant/ConstantData"


class MyImagesComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
   
    render(){
        return <div>
            <h2>This is Image Component</h2>
            <img src={images} alt="nature" height="100%" width="100%" />{" "} &nbsp;
            {/* <img src={image1} alt="nature" height="200px" width="200px" /> */}
            <hr />
            {/* <img src={staticData.mountain} alt="Mountain" height="200px" width="200px" />{" "} &nbsp; */}
            {/* <img src={staticData.Panda} alt="Mountain" height="200px" width="200px" /> */}
            <hr />
            <video src={staticData.sampleVideo } controls />
                </div>
    }
}
    
    export default MyImagesComp
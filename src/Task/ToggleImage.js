import React, { Component } from 'react';
import staticData from '../shared/constant/ConstantData';

export class ToggleImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 'mountain' 
    };
  }

  Imagebutton = () => {
   
    const newImage = this.state.currentImage === 'mountain' ? 'panda' : 'mountain';
    this.setState({ currentImage: newImage });
  };

  render() {
    return (
      <div>
        <h2>Toggle Images</h2>
        <div>
          {this.state.currentImage === 'mountain' ? (
            <div>
              <img src={staticData.mountain} alt="Mountain" height="200px" width="200px" />
              <p>Image: {this.state.currentImage}</p>
            </div>
          ) : (
            <div>
              <img src={staticData.Panda} alt="Panda" height="200px" width="200px" />
              <p>Image: {this.state.currentImage}</p>
            </div>
          )}
        </div>
        <button type="button" onClick={this.Imagebutton}>
          Click to Toggle Image
        </button>
      </div>
    );
  }
}

export default ToggleImage;

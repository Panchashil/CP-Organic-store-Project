import React, { Component } from 'react';
import staticData from '../shared/constant/ConstantData';

const multiImages = [
  { src: staticData.Panda, name: 'Panda' },
  { src: staticData.Tiger, name: 'Tiger' },
  { src: staticData.mountain, name: 'mountain' },
  { src: staticData.nature, name: 'nature' },
  { src: staticData.redflower, name: 'redflower' }
];

class MultiImgComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: multiImages[0].src,
      imgName: multiImages[0].name
    };
  }

  clicked = (pic) => {
    const index = pic.target.value;
    this.setState({
      imgSrc: multiImages[index].src,
      imgName: multiImages[index].name
    });
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.imgSrc} alt="img" height="400px" width="400px" />
          <br />
          <span>{this.state.imgName}</span>
          <br />
          <button type="button" value="0" onClick={this.clicked}>Panda</button>
          <button type="button" value="1" onClick={this.clicked}>Tiger</button>
          <button type="button" value="2" onClick={this.clicked}>mountain</button>
          <button type="button" value="3" onClick={this.clicked}>nature</button>
          <button type="button" value="4" onClick={this.clicked}>redflower</button>
        </div>
      </div>
    );
  }
}

export default MultiImgComp;


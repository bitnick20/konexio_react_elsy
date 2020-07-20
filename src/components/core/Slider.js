import React from 'react';
// import RCSlider, { Range } from 'rc-slider';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
    render () {
        console.log("cpn/core/#Slider :", this);
        return (
            <div>
                <RCSlider max={this.props.max} 
                min={this.props.min} onChange={this.props.onChanhe} 
                value={this.props.value}/>
            </div>
        );
    }
}

export default Slider;
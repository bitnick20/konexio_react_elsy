import React from 'react';
// import RCSlider, { Range } from 'rc-slider';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
    render () {
        // console.log("cpn/core/#Slider :", this.props);
        return (
            <div>
                <RCSlider min={this.props.min} 
                max={this.props.max} 
                onChange={this.props.onChange} 
                value={this.props.value}
                />
            </div>
        );
    }
}

export default Slider;
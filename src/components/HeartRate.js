import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';



class HeartRate extends React.Component {
    render () {
        console.log("cmp/#HeartRate :", this.props);
        return (
            <div>
                <Icon name="favorite" color="red"/>
                <p>{this.props.heart}</p>
                <Slider min={this.props.min} 
                max={this.props.max}
                onChange={this.props.onChange} 
                value={this.props.heart}
                />
            </div>
        );
    }
}

export default HeartRate;
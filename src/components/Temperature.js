import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Temperature extends React.Component {
    render () {
        // console.log("cmp/#Temperature :", this.props);
        return (
            <div>
                <Icon name="wb_sunny" color="yellow"/>
                <p>{this.props.temperature}</p>
                <Slider min={this.props.min}
                max={this.props.max}
                onChange={this.props.onChange}
                value={this.props.temperature}
                />
            </div>
        );
    }

}

export default Temperature;
import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Person extends React.Component {
    render () {
        // console.log("cmp/#Person :", this.props);
        return (
            <div> 
                <Icon name="directions_walk" color="black"/>
                <p>{this.props.steps}</p>
                <Slider min={this.props.min}
                max={this.props.max}
                onChange={this.props.onChange}
                value={this.props.steps}/>
            </div>
        );
    }
}

export default Person;
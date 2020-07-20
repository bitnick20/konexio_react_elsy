import React from 'react';
import Icon from './core/Icon';

class Person extends React.Component {
    render () {
        return (
            <div> 
                <Icon name="directions_walk" color="black"/>
                <p>{this.props.steps}</p>
            </div>
        );
    }
}

export default Person;
import React from 'react';
import Icon from './core/Icon';

class Temperature extends React.Component {
    render () {
        console.log("Je teste le console.log : ");
        return (
            <div>
                <Icon name="wb_sunny" color="yellow"/>
                <p>{this.props.temperature}</p>
            </div>
        );
    }

}

export default Temperature;
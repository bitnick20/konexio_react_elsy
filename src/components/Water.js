import React from 'react';
import Icon from './core/Icon';


class Water extends React.Component {
    render () {
        return (
            <div>
                <Icon name="local_drink" color="blue"/>
                <p>{this.props.water}</p>
            </div>
        );
    }
}


export default Water;
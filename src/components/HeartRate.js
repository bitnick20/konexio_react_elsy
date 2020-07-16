import React from 'react';
import Icon from './core/Icon';



class HeartRate extends React.Component {
    render () {
        return (
            <div>
                <Icon name="favorite" color="red"/>
                <p>{this.props.heart}</p>
            </div>
        );
    }
}

export default HeartRate;
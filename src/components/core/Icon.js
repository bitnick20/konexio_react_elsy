import React from 'react';

class Icon extends React.Component {
   render () {
       return (
           <div>
                <span class="material-icons" style={{ fontSize: 100, color: this.props.color}}>
                    {this.props.name}
                </span>
           </div>
       );
   }
}

export default Icon;
import React from 'react';

class Icon extends React.Component {
   render () {
    //    console.log("cmp/core/#Icon :", this.props)
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
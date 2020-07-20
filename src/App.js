import React from 'react';

import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Temperature from './components/Temperature';
import Slider from './components/core/Slider';
import Icon from '../src/components/core/Icon';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends React.Component {
  constructor (props) {
    super ();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }

    this.onHeartChange = this.onHeartChange.bind(this);
  }

  onHeartChange (val) {
    console.log("Console de App :");
    this.setState({heart: val});
  }

  render () {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="box col-md-2 col-6">
              <Water water={this.state.water}/>
              <Slider/>
            </div>

            <div className="box col-md-2 col-6">
              <Person steps={this.state.steps}/>
              <Slider/>
            </div>
              
            <div className="box col-md-2 col-6"> 
              <HeartRate heart={this.state.heart}/>
              {/* <Slider/> */}
            </div>

            <div className="box col-md-2 col-6">
              <Temperature temperature={this.state.temperature}/>
              <Slider/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
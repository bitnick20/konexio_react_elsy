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
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange =this.onTemperatureChange.bind(this);
  }

  onHeartChange (val) {
    console.log("App #onHeartChange :");
    this.setState({heart: val});
  }

  onStepsChange (val) {
    console.log("App #onStepsChange :");
    this.setState({steps: val});
  }

  onTemperatureChange (val) {
    console.log("App #oonTemperatureChange :");
    this.setState({temperature: val})
  }

  //METODE EN +

  calculateWater () {
    console.log("App #calculateWater :");
  }

  render () {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="box col-md-2 col-6">
              <Water water={this.state.water}/>
            </div>

            <div className="box col-md-2 col-6">
              <Person min={MIN_STEPS} max={MAX_STEPS}
              onChange={this.onStepsChange}
              steps={this.state.steps} 
              />
              {/* <Slider/> */}
            </div>
              
            <div className="box col-md-2 col-6"> 
              <HeartRate min={MIN_HEART} max={MAX_HEART} 
              onChange={this.onHeartChange}
              heart={this.state.heart}
              />
              {/* <Slider/> */}
            </div>

            <div className="box col-md-2 col-6">
              <Temperature min={MIN_TEMPERATURE} max={MAX_TEMPERATURE}
              onChange={this.onTemperatureChange} temperature={this.state.temperature}/>
              {/* <Slider/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
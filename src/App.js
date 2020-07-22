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

  // méthodes de style de vie (méthodes React par ordre alphabétique)

  // écoute d'événements (onClick... onChange... par ordre alphabétique)

  onHeartChange (val) {
    console.log("App #onHeartChange :");
    // je dois affecter le return de la méthode .calculateWater() à la variable water
    const water = this.calculateWater();
    // je peux ainsi aussi modifier le state de water
    this.setState({
      heart: val, 
      water
    });
  }


  onStepsChange (val) {
    console.log("App #onStepsChange :");
    // je dois affecter le return de la méthode .calculateWater() à la variable water
    const water = this.calculateWater();
    // je peux ainsi aussi modifier le state de water
    this.setState({
      steps: val, 
      water
    });
  }


  onTemperatureChange (val) {
    console.log("App #oonTemperatureChange :");
    // je dois affecter le return de la méthode .calculateWater() à la variable water
    const water = this.calculateWater();
    // je peux ainsi aussi modifier le state de water
    this.setState({
      temperature: val, 
      water
    })
  }


  // AUTRES METHODES

  calculateWater () {
    console.log("App #calculateWater :");
    // const temperature = this.state.temperature; // recupérer le state de temperature
    // const steps = this.state.steps;
    // const heart = this.state.heart;

    // ceci est une façon plus simple de récupérer le state
    const {
      temperature,
      steps,
      heart
    } = this.state

    // je dois créer 3 variables est le sinitialiser à 0
    let curseurTemperature = 0;
    let curseurSteps = 0;
    let curseurHeart = 0;

    if(temperature > 20) {
      // la valeur au dessus de 20 dois être multipliée par 0.02
      curseurTemperature = (temperature - 20) * 0.02;
    }
    if(steps > 10000) {
      // la valeur au dessus de 10000 dois être multipliée par 0.00002
      curseurSteps = (steps - 10000) * 0.00002;
    }
    if(heart > 120) {
      // la valeur au dessus de 120 dois être multipliée par 0.0008
      curseurHeart = (heart - 120) * 0.0008;
    }

    // je dois d'abord créer une variable et lui affecter le résultat
    const waterRaw = 1.5 + curseurTemperature + curseurSteps + curseurHeart;
    console.log("App#calculateWater waterRaw :", waterRaw);

    // je ne dois garder que 2 chiffres après la virgule, voici le calcul
    const water = parseInt(waterRaw * 100) / 100;

    // une autre façon de ne garder que 2 chiffres après la virgule
    // const waterRounded = Number(water.toFixed(2));

    console.log('App#calculateWater waterRaw', waterRaw);
    console.log('App#calculateWater water', water);
    // pour puvoir utiliser le résultat dans une autre méthode, je dois faire un return
    return water;

    // this.setState({
    //   water
    // });
  }


  render () {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="box col-md-2 col-6">
              <Water water={this.state.water}/>
              {/* <p>{this.state.water}</p> */}
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
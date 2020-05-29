import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import Chart from './components/Chart';
import { getWeather } from './services/weatherService';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sideDrawerOpen: false,
      temps: [],
      data: []
    };

    this.updateTempsAndData = this.updateTempsAndData.bind(this)
  }

  async updateTempsAndData() {
    try {
      const data = await getWeather();
      const temps = data.map(item => item.temperature.replace("°C", ""))
      console.log(data)
      temps.push(-Math.max(...temps, 0))
      this.setState({data, temps})
    } catch (err) {
      console.log(err);
    }
  }

  drawerToggleCliclHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  async componentDidMount() {
    this.updateTempsAndData()
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="main-page" style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleCliclHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>  
          <div className="row no-gutters">
            <div className="col-md-6 no-gutters">
              <div className="leftside">
              <Switch>
                <Route exact path='/' component={Weather}/>
                <Route exact path='/pogoda' component={Weather}/>
                <Route exact path='/wykresy' component={() => <Chart temps={this.state.temps}/>}/>
              </Switch>
              </div>
            </div>
            <div className="col-md-6 no-gutters">
              <div className="rightside">
                <div id="windy"></div>  
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

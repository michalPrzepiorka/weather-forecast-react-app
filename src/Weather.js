import React, { Component } from 'react';
import {getWeather} from './services/weatherService';
import Box from '@material-ui/core/Box';
import './Weather.css'

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: []
        } 
    }
    
    async componentDidMount() {
        try {
            const temp = await getWeather();
            this.setState({temp});
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const {temp} = this.state;

        var chartCity = [];
        var chartTemp = [];
        const items = temp.map(item => {
            chartCity = item.cityName;
            console.log(chartCity);
            
            chartTemp = item.temperature;
            console.log(chartTemp);

            return (
                <Box boxShadow={2} key={item.id}>
                    <div className="weather-list">
                        {item.cityName}
                        <div style={{flex: '1'}}></div>
                        <Box boxShadow={3} borderRadius='4px' padding='3px' style={{background: 'cornflowerblue'}}>
                            <div style={{color: 'white'}}>{item.temperature}</div>
                        </Box>
                    </div>
                </Box>
            )
        })

        return (
            <div>
                {items.length ?
                    <div>{items}</div> :
                    <p>loading...</p>
                }
            </div>
        )
    }
}

export default Weather; 
import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
    
class Chart extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            chartData: {
                labels: [
                    "Białystok",
                    "Bydgoszcz",
                    "Kraków", 
                    "Gdańsk",
                    "Katowice",
                    "Kielce",
                    "Łódź", 
                    "Lublin",
                    "Olsztyn",
                    "Opole", 
                    "Poznań",
                    "Rzeszów", 
                    "Szczecin",
                    "Warszawa",
                    "Wrocław",
                    "Zielona Góra"
                ],
                datasets: [
                    {
                        label: 'Temperatura',
                        data: props.temps,
                        backgroundColor: [
                            'hsl(205, 100%, 26%)',
                            'hsl(205, 100%, 29%)',
                            'hsl(205, 100%, 32%)',
                            'hsl(205, 100%, 35%)',
                            'hsl(205, 100%, 38%)',
                            'hsl(205, 100%, 41%)',
                            'hsl(205, 100%, 44%)',
                            'hsl(205, 100%, 47%)',
                            'hsl(205, 100%, 50%)',
                            'hsl(205, 100%, 53%)',
                            'hsl(205, 100%, 56%)',
                            'hsl(205, 100%, 59%)',
                            'hsl(205, 100%, 62%)',
                            'hsl(205, 100%, 65%)',
                            'hsl(205, 100%, 68%)',
                            'hsl(205, 100%, 71%)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        console.log(this.state.chartData)
        return (
            <div className="chart" style={{paddingTop: "70px"}}>
                <Bar 
                    data={this.state.chartData}
                    width={100}
                    height={60}
                    options={{
                        title:{
                            display: true,
                            text: 'Wykres temperatur dla miast Polski',
                            fontSize: 22 
                        },
                        legend:{
                            display: true,
                            position: 'top'
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;
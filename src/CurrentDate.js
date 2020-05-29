import React, { Component } from 'react';
import {getCurrentDate} from './services/weatherService';

class CurrentDate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "No date..."
        } 
    }
    
    async componentDidMount() {
        try {
            const date = await getCurrentDate();
            this.setState({
                date: date.date
            });
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const {date} = this.state;

        return (
            <div>
                {date}
            </div>
        )
    }
}

export default CurrentDate; 
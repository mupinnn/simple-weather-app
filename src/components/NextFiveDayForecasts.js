import React from 'react';
import moment from 'moment';
import '../App.css';

class NextFiveDayForecasts extends React.Component {

    render() {
        const forecast = this.props.forecasts;
        
        if (forecast.cod === 404 || forecast.cod === "404") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Error 404 - Cannot show forecast data on your city. City not found.
                    </div>
                </div>
            );
        } else if (forecast.cod === 401 || forecast.cod === "401") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Error 401 - Cannot show forecast data on your city. Invalid API key.
                    </div>
                </div>
            );
        } else if (forecast.cod === 429 || forecast.cod === "429") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Error 429 - Cannot show forecast data on your city. Services has reached maximum request. Try again later.
                    </div>
                </div>
            );
        } else if (forecast.cod === 500 || forecast.cod === "500") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Error 500 - Cannot show forecast data on your city. Internal server error.
                    </div>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <h3 className="Result-info">Next 5 day weather forecast at 06:00 AM</h3>
                    <div className="Cards-next-five">
                        {
                            forecast.list.filter(day => day.dt_txt.endsWith("06:00:00"))
                                .map((day, index) => {
                                    return (
                                        <div className="Card-next-five" key={index}>
                                            <p className="Date-time">{moment(day.dt_txt).format("ddd, DD MMM YY - HH:mm A")}</p>
                                            <p className="Weather-desc">{day.weather[0].description}</p>
                                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={`weather-icon-${day.weather[0].description}`} />
                                            <p className="Temperature-cond">{Math.round(day.main.temp)} &#x2103; | {Math.round((day.main.temp * 9 / 5) + 32)} &#x2109;</p>
                                            <p className="Humid">{}</p>
                                        </div>
                                    );
                                })
                        }
                    </div>
                </React.Fragment>
            );
        }
    }

}

export default NextFiveDayForecasts;
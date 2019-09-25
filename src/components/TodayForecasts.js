import React from 'react';
import '../App.css';
import moment from 'moment';

class TodayForecasts extends React.Component {

    render() {
        const today = this.props.todays;
        if (today.length === 0) {
            return (
                <p>No data</p>
            );
        } else {
            return (
                <React.Fragment>
                    <h3 className="Result-info">Current weather based on your search :</h3>
                    <div className="Cards-today">
                        <h2 className="City-name">{today.name}, {today.sys.country}</h2>
                        <div className="Card-today">
                            <div className="Weather-details">
                                <p className="Date-time">{moment.unix(today.dt).format("ddd, D MMMM YYYY")}</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>humidity</td>
                                            <td>{today.main.humidity}%</td>
                                        </tr>
                                        <tr>
                                            <td>pressure</td>
                                            <td>{today.main.pressure} hPa</td>
                                        </tr>
                                        <tr>
                                            <td>min temp</td>
                                            <td>{Math.round(today.main.temp_min)} &#x2103; | {Math.round((today.main.temp_min * 9 / 5) + 32)} &#x2109;</td>
                                        </tr>
                                        <tr>
                                            <td>max temp</td>
                                            <td>{Math.round(today.main.temp_max)} &#x2103; | {Math.round((today.main.temp_max * 9 / 5) + 32)} &#x2109;</td>
                                        </tr>
                                        <tr>
                                            <td>sunrise</td>
                                            <td>{moment.unix(today.sys.sunrise).format("LT")}</td>
                                        </tr>
                                        <tr>
                                            <td>sunset</td>
                                            <td>{moment.unix(today.sys.sunset).format("LT")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="Weather-cond">
                                <p className="Weather-main">{today.weather[0].main},</p>
                                <p className="Weather-desc">{today.weather[0].description}</p>
                                <img src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} alt={`weather-icon-${today.weather[0].description}`} />
                                <p className="Temperature-cond">{Math.round(today.main.temp)} &#x2103; | {Math.round((today.main.temp * 9 / 5) + 32)} &#x2109;</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }

}

export default TodayForecasts;
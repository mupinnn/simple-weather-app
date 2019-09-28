import React from 'react';
import '../App.css';
import moment from 'moment';

class TodayForecasts extends React.Component {

    render() {
        const today = this.props.todays;
        const geoError = this.props.geoErrorMsg;
        const loading = this.props.isLoading;

        if (geoError === 1 || geoError === "1") {
            return (
                <div className="Cards-info">
                    <div className="Card-info">
                        Please turn on your browser geolocation feature. Or try to search your location manually.
                    </div>
                </div>
            );
        } else if (geoError === 2 || geoError === "2") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Internal error, failed to get your location. Try again later.
                    </div>
                </div>
            );
        } else if (geoError === 3 || geoError === "3") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Request timed out. Try again later
                    </div>
                </div>
            );
        } else if (geoError === 0 || geoError === "0") {
            return (
                <div className="Cards-info">
                    <div className="Card-danger">
                        Unknown error. Try again later.
                    </div>
                </div>
            );
        } else if (geoError === "notsupported") {
            return (
                <div className="Cards-info">
                    <div className="Card-info">
                        Geolocation feature is not supported by this browser. 
                        Try to update your browser to the latest version or search your location manually.
                    </div>
                </div>
            );
        } else {
            if (loading) {
                return <div className="Loader"></div>
            } else {
                if (today.cod === 404 || today.cod === "404") {
                    return (
                        <div className="Cards-info">
                            <div className="Card-danger">
                                Error 404 - City not found.
                            </div>
                        </div>
                    );
                } else if (today.cod === 401 || today.cod === "401") {
                    return (
                        <div className="Cards-info">
                            <div className="Card-danger">
                                Error 401 - Invalid API key.
                            </div>
                        </div>
                    );
                } else if (today.cod === 429 || today.cod === "429") {
                    return (
                        <div className="Cards-info">
                            <div className="Card-danger">
                                Error 429 - Services has reached maximum request. Try again later.
                            </div>
                        </div>
                    );
                } else if (today.cod === 500 || today.cod === "500") {
                    return (
                        <div className="Cards-info">
                            <div className="Card-danger">
                                Error 500 - Internal server error.
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <React.Fragment>
                            <h3 className="Result-info">Current weather based on your location :</h3>
                            <div className="Cards-today">
                                <h2 className="City-name">{today.name}, {today.sys.country}</h2>
                                <div className="Card-today">
                                    <div className="Weather-details">
                                        <p className="Date-time">{moment.unix(today.dt).format("ddd, DD MMMM YYYY")}</p>
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
                                                    <td>{moment.unix(today.sys.sunrise).format("HH:mm A")}</td>
                                                </tr>
                                                <tr>
                                                    <td>sunset</td>
                                                    <td>{moment.unix(today.sys.sunset).format("HH:mm A")}</td>
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
    }

}

export default TodayForecasts;
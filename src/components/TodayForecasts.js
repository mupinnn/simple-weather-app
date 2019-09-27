import React from 'react';
import '../App.css';
import moment from 'moment';

class TodayForecasts extends React.Component {

    render() {
        const today = this.props.todays;
        const geoError = this.props.geoErrorMsg;
        const loading = this.props.isLoading;

        if (geoError === 1 || geoError === "1") {
            return <p>denied</p>
        } else if (geoError === 2 || geoError === "2") {
            return <p>position unavailable</p>
        } else if (geoError === 3 || geoError === "3") {
            return <p>timeout</p>
        } else if (geoError === 0 || geoError === "0") {
            return <p>unknown error</p>
        } else if (geoError === "notsupported") {
            return <p>not supported</p>
        } else {
            if (loading) {
                return <p>loading</p>
            } else {
                if (today.cod === 404 || today.cod === "404") {
                    return <p>404</p>
                } else if (today.cod === 401 || today.cod === "401") {
                    return <p>401</p>
                } else if (today.cod === 429 || today.cod === "429") {
                    return <p>429</p>
                } else if (today.cod === 500 || today.cod === "500") {
                    return <p>500</p>
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
    }

}

export default TodayForecasts;
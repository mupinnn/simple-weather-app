import React from 'react';
import '../App.css';

class TodayForecasts extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h3 className="Result-info">Current weather based on your location / search :</h3>
                <div className="Cards-today">
                    <h2 className="City-name">Jakarta, ID</h2>
                    <div className="Card-today">
                        <div className="Weather-details">
                            <p className="Date-time">16:45, 23 Sept 2019</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>humidity</td>
                                        <td>52%</td>
                                    </tr>
                                    <tr>
                                        <td>pressure</td>
                                        <td>1013</td>
                                    </tr>
                                    <tr>
                                        <td>min temp</td>
                                        <td>18 &#x2103; / 54 &#x2109;</td>
                                    </tr>
                                    <tr>
                                        <td>max temp</td>
                                        <td>18 &#x2103; / 54 &#x2109;</td>
                                    </tr>
                                    <tr>
                                        <td>sunrise</td>
                                        <td>18 &#x2103; / 54 &#x2109;</td>
                                    </tr>
                                    <tr>
                                        <td>sunset</td>
                                        <td>18 &#x2103; / 54 &#x2109;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="Weather-cond">
                            <p className="Weather-main">Clouds,</p>
                            <p className="Weather-desc">Few clouds</p>
                            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                            <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default TodayForecasts;
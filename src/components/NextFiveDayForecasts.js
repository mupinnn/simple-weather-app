import React from 'react';
import '../App.css';

class NextFiveDayForecasts extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h3 className="Result-info">5 day weather forecast</h3>
                <div className="Cards-next-five">
                    <div className="Card-next-five">
                        <p className="Date-time">Tue, 24 Sept 2019</p>
                        <p className="Weather-desc">light rain</p>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                        <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        <p className="Humid">humidity 35%</p>
                    </div>
                    <div className="Card-next-five">
                        <p className="Date-time">Tue, 24 Sept 2019</p>
                        <p className="Weather-desc">light rain</p>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                        <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        <p className="Humid">humidity 35%</p>
                    </div>
                    <div className="Card-next-five">
                        <p className="Date-time">Tue, 24 Sept 2019</p>
                        <p className="Weather-desc">light rain</p>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                        <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        <p className="Humid">humidity 35%</p>
                    </div>
                    <div className="Card-next-five">
                        <p className="Date-time">Tue, 24 Sept 2019</p>
                        <p className="Weather-desc">light rain</p>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                        <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        <p className="Humid">humidity 35%</p>
                    </div>
                    <div className="Card-next-five">
                        <p className="Date-time">Tue, 24 Sept 2019</p>
                        <p className="Weather-desc">light rain</p>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                        <p className="Temperature-cond">32 &#x2103; / 89.6 &#x2109;</p>
                        <p className="Humid">humidity 35%</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default NextFiveDayForecasts;
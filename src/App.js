import React from 'react';
import SearchBar from './components/SearchBar';
import TodayForecasts from './components/TodayForecasts';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWeatherData: [],
            fiveDayForecastData: [],
            searchedCity: "",
            geoErrorMsg: "",
            isLoading: true
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // Get current weather data by city name
    getWeatherDataByCityName = (name) => {
        this.setState({geoErrorMsg: "", isLoading: true});
        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        ])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([result1, result2]) => {
            this.setState({
                currentWeatherData: result1,
                fiveDayForecastData: result2,
                isLoading: false
            });
        });
    }

    // Get current weather & five day foreast data by latitude & longitude
    getWeatherDataByLatLong = (lat, long) => {
        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        ])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([result1, result2]) => {
            this.setState({
                currentWeatherData: result1,
                fiveDayForecastData: result2,
                isLoading: false
            });
        });
    }

    // Handle input change
    handleInput = (e) => {
        this.setState({searchedCity: e.target.value});
    }

    // Handle form submit
    handleSubmit = (e) => {
        e.preventDefault();

        this.getWeatherDataByCityName(this.state.searchedCity);

        // Clear input state
        this.setState({searchedCity: ""});
    }

    // Get current location
    getCurrentLocation = () => {
        // Check if geolocation is availabel
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.getWeatherDataByLatLong(pos.coords.latitude, pos.coords.longitude);
            }, err => {
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        this.setState({geoErrorMsg: err.code});
                        break;
                    case err.POSITION_UNAVAILABLE:
                        this.setState({geoErrorMsg: err.code});
                        break;
                    case err.TIMEOUT:
                        this.setState({geoErrorMsg: err.code});
                        break;
                    case err.UNKNOWN_ERROR:
                        this.setState({geoErrorMsg: err.code});
                        break;
                    default:
                        this.setState({geoErrorMsg: err.code});
                        break;
                }
            });
        } else {
            this.setState({geoErrorMsg: "notsupported"});
        }
    }

    // Execute get data by current location in first render
    componentDidMount() {
        this.getCurrentLocation();
    }

    render() {
        const {currentWeatherData, fiveDayForecastData, geoErrorMsg, isLoading} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple Weather Forecasts App</h1>
                </header>
                <SearchBar inputVal={this.state.searchedCity} searchInput={this.handleInput} searchSubmit={this.handleSubmit} />
                <TodayForecasts todays={currentWeatherData} forecasts={fiveDayForecastData} geoErrorMsg={geoErrorMsg} isLoading={isLoading} />
                <footer className="App-footer">
                    <p>The weather forecast is displayed in accordance with your local time. Please pay attention to it when you will watch the weather in another time zone.</p>
                    <p>Made with <span className="Heart">&#10084;</span> by <a href="https://github.com/mupinnn" target="_blank" rel="noopener noreferrer">@mupinnn</a> &copy; 2019 - Weather data provided by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeatherMap.org</a></p>
                </footer>
            </div>
        );
    }

}

export default App;

import React from 'react';
import SearchBar from './components/SearchBar';
import TodayForecasts from './components/TodayForecasts';
import NextFiveDayForecasts from './components/NextFiveDayForecasts';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWeatherData: [],
            fiveDayForecastData: [],
            searchedCity: "",
            inputVal: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // Get data by name
    getWeatherDataByCityName = (name) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(result => this.setState({currentWeatherData: result}));
    }

    // Get data by latitude & longitude
    getWeatherDataByLatLong = (lat, long) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(result => this.setState({currentWeatherData: result}));
    }

    // Handle input change
    handleInput = (e) => {
        this.setState({inputVal: e.target.value});
    }

    // Handle form submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            searchedCity: this.state.inputVal,
            inputVal: ""
        });

        this.getWeatherDataByCityName(this.state.searchedCity);
    }

    // Show current latitude, longitude position
    showPosition = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        this.getWeatherDataByLatLong(lat, long);
    }

    errPosition = () => {
        console.log("denied");
    }

    // Handle geolocation permission
    handleGeoPermission = () => {
        const geoSettings = {enableHighAccuracy: true};
        const showPosition = this.showPosition;
        const errPosition = this.errPosition;
        navigator.permissions.query({name: "geolocation"}).then(function(result) {
            if (result.state === "granted") {
                console.log(result.state);
                navigator.geolocation.getCurrentPosition(showPosition, errPosition, geoSettings);
            } else if (result.state === "prompt") {
                console.log(result.state);
                navigator.geolocation.getCurrentPosition(showPosition, errPosition, geoSettings);
            } else {
                console.log("denied");
            }
        });
    }

    // Do componentDidMount, and check if geolocation feature is allowed.
    componentDidMount() {
        if (navigator.geolocation) {
            this.handleGeoPermission();
        } else {
            console.log("your browser doesn't support geolocation features. pls type on the field above");
        }
    }

    render() {
        const {inputVal, searchedCity, currentWeatherData, fiveDayForecastData} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple Weather Forecasts App</h1>
                </header>
                <SearchBar inputValue={inputVal} searchSubmit={this.handleSubmit} searchInput={this.handleInput} />
                <TodayForecasts />
                <NextFiveDayForecasts />
                <footer className="App-footer">
                    <p>Made with <span className="Heart">&#10084;</span> by <a href="https://github.com/mupinnn" target="_blank" rel="noopener noreferrer">@mupinnn</a> &copy; 2019</p>
                </footer>
            </div>
        );
    }

}

export default App;

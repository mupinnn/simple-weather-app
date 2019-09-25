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
            currentLat: "",
            currentLong: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // Handle input change
    handleInput = (e) => {
        this.setState({searchedCity: e.target.value});
    }

    // Handle form submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({searchedCity: this.state.searchedCity});
    }

    // Get data by name
    getWeatherDataByCityName = (name) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(result => console.log(result));
    }

    // Get data by latitude & longitude
    getWeatherDataByLatLong = (lat, long) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(result => console.log(result));
    }

    // Show current latitude, longitude position
    showPosition = (position) => {
        this.setState({
            currentLat: position.coords.latitude,
            currentLong: position.coords.longitude
        });
    }

    // Do componentDidMount, and check if geolocation feature is allowed.
    componentDidMount() {
        const pos = this.showPosition;
        if (navigator.geolocation) {
            navigator.permissions.query({name: "geolocation"}).then(function(result) {
                if (result.state === "granted") {
                    console.log("allowed");
                } else {
                    console.log("blocked");
                }
            });
        } else {
            console.log("geolocation isn't supported in your browser");
        }
    }
    

    render() {
        const {searchedCity} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple Weather Forecasts App</h1>
                </header>
                <SearchBar inputValue={searchedCity} searchSubmit={this.handleSubmit} searchInput={this.handleInput} />
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

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
            isAllowLocation: true
        }
    }

    render() {
        const {searchedCity} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple Weather Forecasts App</h1>
                </header>
                <SearchBar value={searchedCity} searchSubmit={this.handleSubmit} searchInput={this.handleInput} />
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

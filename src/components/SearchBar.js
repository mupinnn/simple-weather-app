import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class SearchBar extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.searchSubmit}>
                <input type="text" className="Search-input" placeholder="Enter city name . . ." value={this.props.inputVal} onChange={this.props.searchInput} />
                <button type="submit" className="Search-submit">
                    <FontAwesomeIcon style={{color: "white"}} icon={faSearch} />
                </button>
            </form>
        );
    }

}

export default SearchBar;
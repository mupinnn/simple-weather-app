import React from 'react';
import '../App.css';

class SearchBar extends React.Component {

    render() {
        return (
            <form>
                <input type="text" className="Search-input" placeholder="Enter city name . . ." />
                <button type="submit" className="Search-submit">Submit</button>
            </form>
        );
    }

}

export default SearchBar;
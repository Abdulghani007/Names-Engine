import React from 'react';
import './SearchBox.css';
class SearchBox extends React.Component
{

    render(){
        return (
            <div className="searchBox">
                <input class="search" type="text" onChange={this.props.onChange} placeholder="Enter Keywords..." />
            </div>

        );
    }
}

export default SearchBox;
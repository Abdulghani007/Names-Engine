import React from 'react';
import './SearchBox.css';
class SearchBox extends React.Component
{

    render(){
        return (
            <div className="searchBox">
                <input className="search" type="text" onChange={this.props.onChange} placeholder="Type Keywords" />
            </div>

        );
    }
}

export default SearchBox;
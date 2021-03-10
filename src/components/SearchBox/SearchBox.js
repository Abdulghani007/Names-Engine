import React from 'react';
import './SearchBox.css';
class SearchBox extends React.Component
{

    render(){
        return (
            <div className="searchBox">
                <form onSubmit={this.props.onSubmit}>
                    <input class="search" type="text" onChange={this.props.onChange} placeholder="Enter Keywords..." />
                </form>
                
            </div>

        );
    }
}

export default SearchBox;
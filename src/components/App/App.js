import React from 'react';
import SearchBox from './../SearchBox/SearchBox';
import NamesBox from './../NamesBox/NamesBox';
import './App.css';
import header_image from './header_image.jpg';
const name = require('@rstacruz/startup-name-generator')

class App extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {value: '', names:[], handleExpanded: true, handleFont:true};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event)
    {
        const List = event.target.value? name(event.target.value):[];
        this.setState({value: event.target.value, handleExpanded: event.target.value.length > 0 ? false: true,handleFont: event.target.value.length > 0 ? false:true, names:List});
    }

    render()
    {
        return (
            <div className="App">

                <div className="container">
                    <img className={`title_image ${this.state.handleExpanded ? "title_image_expanded":"title_image_contracted"}`} src={header_image} alt="picture"/>
                    <h1 className={`title ${this.state.handleFont ? "title_expanded":"title_contracted"}`}>Names Hunt!</h1>
                    <SearchBox  onChange={this.handleChange}/>
                    <NamesBox namesList={this.state.names}/>
                </div>
               
            </div>
            
        );
    }
}

export default App
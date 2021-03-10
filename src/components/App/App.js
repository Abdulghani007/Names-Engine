import React from 'react';
import SearchBox from './../SearchBox/SearchBox';
import NamesBox from './../NamesBox/NamesBox';
import './App.css';
const name = require('@rstacruz/startup-name-generator')

// function App()
// {
//     const element = 
    
//     <div>
//         <h1>Names Hunt</h1>
//         <h2>Click It to Name It!</h2>
        
//         <input type="text" value={this.state.value}/>
//     </div>;
//     return element;
// }

class App extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {value: '', names:[], handleExpanded: true, handleFont:true};

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event)
    {
        const List = event.target.value? name(event.target.value):[];
        // this.setState({names:List});
        this.setState({value: event.target.value, handleExpanded: event.target.value.length > 0 ? false: true,handleFont: event.target.value.length > 0 ? false:true, names:List});
    }

    handleSubmit(event)
    {
        const List = event.target.value? name(event.target.value):[];
        // this.setState({names:List});
        this.setState({value: event.target.value, handleExpanded: event.target.value.length > 0 ? false: true,handleFont: event.target.value.length > 0 ? false:true, names:List});
        event.preventDefault();
    }
    render()
    {
        return (
            <div className="App">

                <div className="container">
                    <img className={`title_image ${this.state.handleExpanded ? "title_image_expanded":"title_image_contracted"}`} src="./title_image.jpg"/>
                    <h1 className={`title ${this.state.handleFont ? "title_expanded":"title_contracted"}`}>Names Hunt!</h1>
                    {/* <h2 className="title">Click It to Name It!</h2> */}
                    <SearchBox onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                    <NamesBox namesList={this.state.names}/>
                </div>
               
            </div>
            
        );
    }
}

export default App
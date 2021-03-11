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
        this.state = {value: '', names:[], handleExpanded: true, handleFont:true, scrollTimer: -1, scrollEnd: false, scrollingButton: false};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        const inputText = event.target.value; 
        const List = inputText? name(inputText):[];
        this.setState({value: inputText, handleExpanded: inputText.length > 0 ? false: true,
            handleFont: inputText.length > 0 ? false:true, names:List, scrollingButton: inputText.length > 0? true:false});
        
    }

    // Called when rendering has completed
    componentDidMount() {
        const element = document.getElementById("namesBox");
        element.addEventListener('scroll', this.handleScroll);
    }

    // Execute the React code when the component gets destroyed or unmounted from the DOM
    componentWillUnmount() {
        const element = document.getElementById("namesBox");
        element.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        if (this.state.scrollTimer !== -1)
        {
            this.setState({scrollEnd:false}); // scrollEnd: false means it is scrolling
            clearTimeout(this.state.scrollTimer);
        }
        
        this.setState({scrollTimer: window.setTimeout(() => {
            this.setState({scrollEnd: true}); // scrollEnd: true means scrolling has been stopped
            console.log(this.state.scrollEnd);
        },2000)})

    }

    render()
    {
        return (
            <div className="App">

                <div className="container">
                    <img className={`title_image ${this.state.handleExpanded ? "title_image_expanded":"title_image_contracted"}`} src={header_image} alt="picture"/>
                    <h1 className={`title ${this.state.handleFont ? "title_expanded":"title_contracted"}`}>Names Engine!</h1>
                    <SearchBox  onChange={this.handleChange}/>
                    <NamesBox onScroll={this.handleScroll} scrollEndValue={this.state.scrollEnd} scrollingButton={this.state.scrollingButton} namesList={this.state.names}/>
                </div>
               
            </div>
            
        );
    }
}

export default App
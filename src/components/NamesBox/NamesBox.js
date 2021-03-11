import React from 'react';
import NameBox from './../NameBox/NameBox';
import './NamesBox.css'
// const names = {this.props.namesList}
class NamesBox extends React.Component
{
    handleScrollDown = () => {
        const element = document.getElementById("namesBox");
        element.scrollBy(0,50);
    }

    handleScrollUp = () => {
        const element = document.getElementById("namesBox");
        element.scrollBy(0,-50);
    }
    render()
    {
        return (
            <div className="box">
                <div id="namesBox" className={`namesBox ${this.props.scrollEndValue === true?"scrollEnd":"scrollNotEnd"}`}>
                    {this.props.namesList.map(name => (
                        <NameBox val={name}/>
                    ))}    
                </div>
                
                <button className={this.props.scrollingButton?"scrollUp":"noScrollUp"} onClick={this.handleScrollUp}><i className="far fa-hand-point-up"></i></button>
                <button className={this.props.scrollingButton?"scrollDown":"noScrollDown"} onClick={this.handleScrollDown}><i className="far fa-hand-point-down"></i></button>
            </div>
        );
    }
}

export default NamesBox;
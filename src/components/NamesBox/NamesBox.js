import React from 'react';
import NameBox from './../NameBox/NameBox';
import './NamesBox.css'
// const names = {this.props.namesList}
class NamesBox extends React.Component
{
    render()
    {
        return (
            <div className="namesBox">
                
                {this.props.namesList.map(name => (
                    <NameBox val={name}/>
                ))}
            </div>
        );
    }
}

export default NamesBox;
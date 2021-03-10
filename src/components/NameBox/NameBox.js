import React from 'react';
import './NameBox.css';

class NameBox extends React.Component
{

    render()
    {
        return(
            <div className="nameBox">

                <a className="domainLink" href={"https://in.godaddy.com/domainsearch/find?checkAvail=1&tmskey=1dom_03&domainToCheck=" + this.props.val} target="_blank" rel="noreferrer">{this.props.val}</a>
            </div>
        );
    }
}

export default NameBox;
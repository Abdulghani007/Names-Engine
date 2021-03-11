import React from 'react';
import './MadeBy.css'

class MadeBy extends React.Component{

    render(){
    return (
        <div className={this.props.showMadeBy?"showMadeBy":"notShowMadeBy"}>
            <h3 className="author">Made By:</h3>
            <h2 className="authorName">Abdul Ghani</h2>
            <a className="linkedin" href="https://www.linkedin.com/in/abdulghani07/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> abdulghani07</a>
            <a className="github" href="https://github.com/Abdulghani007?tab=repositories" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Abdulghani007</a>
            <a className="github" href="https://github.com/Abdulghani007/Names-Engine/" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i> Names Engine!</a>
        </div>
    );
    }
}

export default MadeBy;
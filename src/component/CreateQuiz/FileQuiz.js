import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import RadioQuiz from './RadioQuiz';

class FileQuiz extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        console.log("Render" + this.props.QuizStatus)
        return (
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#"></a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
            </div>
        );
    }
}

export default FileQuiz;


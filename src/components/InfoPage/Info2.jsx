import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Info2 extends Component {        
    render() {
        return (
            <div id="infoPage">
                <img src={this.props.image} alt={this.props.title} width="500" height="600"/>
                <p id="book_title">{this.props.title}</p>
                <p id="book_description">{this.props.summary}</p>
                <Link id="book_link" to={`/epub`} >Start Reading</Link>    
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './info.css';

export default class InfoData extends Component {
    render() {
        return (
            <div id="infoPage">
                <img src={this.props.image} alt={this.props.title} id="book_image" />
                <p id="book_title">{this.props.title}</p>
                <p id="book_description">{this.props.summary}</p>
                <Link id="book_link" to={`/epub`} >Start Reading</Link>    
            </div>
        )
    }
}

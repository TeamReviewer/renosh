import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import InfoData from './InfoData'
import axios from 'axios'

export default class Info2 extends Component {
    state = {
        book: {},
        isLoading : true
    }       

    getBookInfoDataFromServer = async (book_id) => {
        const book = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/" + book_id);        

        this.setState({
            book: book.data,
            isLoading: false
        })
    }   

    componentDidMount() {
        if(this.props.book_id === undefined || this.props.book_id === null) {
            let book_id = this.props.match.params.book_id;
            this.getBookInfoDataFromServer(book_id);            
            this.setState({
                isLoading:false
            })
        } else {
            this.setState({
                isLoading:false
            })
        }
    }

    

    render() {
        let infoData;
        if(!this.state.isLoading && this.state.book !== {}) {
            infoData = <InfoData image={this.state.book.image} title={this.state.book.title} summary={this.state.book.summary} />
        }else if(!this.state.isLoading) {
            infoData = <InfoData image={this.props.image} title={this.props.title} summary={this.props.summary} />
        }
        return (
            <div>
                {this.state.isLoading ? "isLoading ... " : infoData}
            </div>
        )
    }
}

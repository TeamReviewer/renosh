import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './info.css';

export default class InfoData extends Component {

    updateMyBookList = async (userid, userbooklistid) => {
        await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid +"/"+ userbooklistid + '/mybooklist',
            data:{
                bookid: this.props.id
            }
        });
    }

    getUserBookListFromServer = async (userid) => {
        await axios({
            method:'get',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
        }).then((res) => {
            // console.log(res.data[0].mybooklist);
            this.props.updateMyBookList('UPDATE_MY_BOOK_LIST', res.data[0].mybooklist);
        });
    }


    handleClick = () => {
        const userid = this.props.userid;
        const userbooklistid = this.props.userbooklistid;
        this.getUserBookListFromServer(userid);
        if(userid !== 'visitor'){
            if(!this.props.isExist){
                console.log("update my book list")
                this.updateMyBookList(userid, userbooklistid);
                this.getUserBookListFromServer(userid);
            }            
        }
    }

    render() {
        return (
            <div id="infoPage">
                <img src={this.props.image} alt={this.props.title} id="book_image" />
                <p id="book_title">{this.props.title}</p>
                <p id="book_description">{this.props.summary}</p>
                <Link id="book_link" to={`/epub`} onClick={(e) => this.handleClick(e)}>Start Reading</Link>    
            </div>
        )
    }
}

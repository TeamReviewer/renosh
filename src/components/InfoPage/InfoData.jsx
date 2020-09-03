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
        const userBookList = await axios({
            method:'get',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
        });
        return userBookList.data[0];
    }


    handleClick = () => {
        const userid = this.props.userid;
        const userbooklistid = this.props.userbooklistid;
        console.log(this.props.id);
        let isExit = false;
        for(let i = 0; i< this.props.mybooklistLength; i++){
            if(this.props.mybooklist[i].bookid === this.props.id){
                console.log("It's already exit");
                isExit = true;
                break;                
            }          
        }
        if(!isExit){
            console.log("update my book list");
            this.updateMyBookList(userid, userbooklistid);            
        }

        this.getUserBookListFromServer(userid).then((res) => {
            this.props.updateMyBookList('UPDATE_MY_BOOK_LIST', res.mybooklist);
        });
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

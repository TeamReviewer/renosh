import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './info.css';

export default class InfoData extends Component {

    // createUserBookListInServer = async (userid, username) => {
    //     console.log("created");
    //     const userBookList = await axios({
    //         method:'post',
    //         url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid,
    //         data:{
    //             userid: userid,
    //             username: username,
    //             mybooklist: [],
    //             wishlist: []
    //         }
    //     });
    //     return userBookList;
    // }

    // getUserBookListFromServer = async (userid) => {
    //     const userBookList = await axios({
    //         method:'get',
    //         url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
    //     });
    //     return userBookList.data[0];
    // }

    updateMyBookList = async (userid) => {
        const userBookList = await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
        });
        return userBookList.data[0];
    }

    handleClick = () => {
        // const userid = this.props.userid;
        // const username = this.props.username;
        // this.getUserBookListFromServer(userid).then((res) => {
        //     console.log(res)
        //     if(res === undefined){
        //         this.createUserBookListInServer(userid, username);
        //         this.getUserBookListFromServer(userid)
        //     }
        // });
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

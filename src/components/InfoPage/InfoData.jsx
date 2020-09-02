import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './info.css';

export default class InfoData extends Component {

    updateMyBookList = async (userid, userbooklistid) => {
        await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid + userbooklistid + '/mybooklist',
            data:{
                mybooklist:this.props.id
            }
        }).then((res)=>{
            console.log(res);
        });
    }

    handleClick = () => {
        // const userid = this.props.userid;
        // const userbooklistid = this.props.userbooklistid;

        // for(let i = 0; i< this.props.mybooklistLenth; i++){
        //     if(this.props.mybooklistt[i].bookid === this.props.id){
        //         break;                
        //     }
        //     else{
        //         this.updateMyBookList(userid, userbooklistid);
        //     }
        // }
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

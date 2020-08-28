import React, {Component} from 'react';
import './MyAnno.css'
import axios from 'axios'

export default class MyAnno extends Component{
    state = {
        cfiRange : this.props.cfiRange,
        text:this.props.text,
        memo: this.props.memo,
        bookid : this.props.id,
        date : this.props.date,
        title: this.props.title
    }
    getBookAnnoData = async () => {
        let book_id = this.props.id;  
        const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + book_id);
        return annos.data;
    }
    render(){
        return (
            <div id="anno" onClick={async function(e){
                let bookAnnoList = await this.getBookAnnoData();
                this.props.selectBook("SELECT_BOOK", this.state.bookid, bookAnnoList)
                this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                this.props.epubFromMypage("READ_MODE", true)
                window.location.href='/epub'
            }.bind(this)}>
                <span id="text">{this.state.text ? this.state.text: ""}</span><br/>
                <span id="memo">{this.state.memo ? this.state.memo: ""}</span><br /><br></br>
                <span id="title">{this.state.title ? this.state.title:""}</span><br></br>
                <span id="date">{this.state.date ? this.state.date : ""}</span><br/>
            </div>
        )
    }
}
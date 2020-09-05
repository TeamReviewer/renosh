import React, { Component } from 'react';
import './Anno.css'
import axios from 'axios';


class Anno extends Component {
    state = {
        cfiRange: this.props.cfiRange,
        username: this.props.username,
        text: this.props.text,
        memo: this.props.memo,
        isOwn: false
    }
    render() {
        let deleteButton = null
        if (this.props.userid === this.props.account_id) {
            deleteButton = <button onClick={e => {
                axios.delete(process.env.REACT_APP_RENOSH_BASE_URL + 'api/highlights/' +this.props.id + '/'+this.props.anno_id)
                .then(res => {
                    this.props.deleteAnno("DELETE_ANNO", this.props.anno_id)
                })
            }}>delete</button>
        }
        return (
            <div id="anno">
                <span id="username">{this.state.username ? this.state.username : ""}</span>
                <span id="memo">{this.state.memo ? this.state.memo : ""}</span>
                {deleteButton}
                <br />
                <span id="text" onClick={function (e) {
                    this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                    this.props.changeLocation(this.state.cfiRange)
                }.bind(this)}>{this.state.text ? this.state.text : ""}</span>
            </div>
        )
    }
}

export default Anno;
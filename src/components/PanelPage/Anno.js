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
        let updateButton = null
        if (this.props.userid === this.props.account_id) {
            deleteButton = <button onClick={e => {
                axios.delete(process.env.REACT_APP_RENOSH_BASE_URL + 'api/highlights/' +this.props.id + '/'+this.props.anno_id)
                .then(res => {
                    this.props.deleteAnno("DELETE_ANNO", this.props.anno_id)
                })
            }}>delete</button>
            updateButton = <button onClick={e => {
                //패널을 가장위로 올리고
                this.props.findAnno(0)
                // form에 inputAnno의 내용을 채워 넣는다.
                this.props.updateAnnoRequest(this.props.memo, this.props.anno_id)
            }}>update</button>
        }
        return (
            <div id="anno">
                <span id="username">{this.props.username ? this.props.username : ""}</span>
                <span id="memo">{this.props.memo ? this.props.memo : ""}</span>
                {updateButton}
                {deleteButton}
                <br />
                <span id="text" onClick={function (e) {
                    this.props.moveToAnno("MOVE_EPUB", this.props.cfiRange)
                    this.props.changeLocation(this.props.cfiRange)
                }.bind(this)}>{this.props.text ? this.props.text : ""}</span>
            </div>
        )
    }
}

export default Anno;
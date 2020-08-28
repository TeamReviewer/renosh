import React, { Component } from 'react'
import "./SelectAnnoListArrange.css"
import axios from 'axios'

export default class SelectAnnoListArrange extends Component {
    getAnnoData = async (viewMode) => {
        let book_id = this.props.id;  
        if(viewMode === 'private' && this.props.user_id !== null) {
            const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/"+this.props.user_id+"/books/"+book_id+"/highlights");
            return annos.data;
        }else if(viewMode === 'others' || (this.props.user_id === null && viewMode === 'private')) {
            const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + book_id+ "/public");
            return annos.data;
        }
        else {
            return null;
        }
    }
    render() {
        return (
            <div id="select-annoList-arrange">
                    <div id="arrange-display">
                        <label id="arrange-display-title">Viewing range: </label>
                        <input type="radio" id="private" onClick={async () => {
                            let viewMode = 'private'
                            let annoList = await this.getAnnoData(viewMode); 
                            this.props.changeViweMode("CHANGE_VIEW_MODE", annoList)
                        }} name="arrange-display" value="private"  />
                        <label>Mine</label>

                        <input type="radio" id="others" onClick={async () => {
                            let viewMode = 'others'
                            let annoList = await this.getAnnoData(viewMode); 
                            this.props.changeViweMode("CHANGE_VIEW_MODE", annoList)
                        }} name="arrange-display" value="others" defaultChecked />
                        <label>Others</label>
                    </div>
                </div>
        )
    }
}

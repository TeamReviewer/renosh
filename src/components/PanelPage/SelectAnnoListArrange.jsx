import React, { Component } from 'react'
import "./SelectAnnoListArrange.css"
import axios from 'axios'

export default class SelectAnnoListArrange extends Component {
    getAnnoData = async (viewMode) => {
        let book_id = this.props.id;  
        if(viewMode === 'private') {
            console.log("viewMode? : ", viewMode)
            const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/"+this.props.user_id+"/highlights");
            return annos.data;
        } else if(viewMode === 'others') {
            console.log("viewMode? : ", viewMode)
            const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + book_id);
            return annos.data;
        }
        else {
            console.log("viewMode? : ", viewMode)
            return null;
        }
    }
    render() {
        return (
            <div id="select-annoList-arrange">
                    <div id="arrange-show">
                        <label id="arrange-show-title">Exposure range: </label>
                        <input type="radio" id="private" name="arrange-show" value="private" />
                        <label>Private</label>                        
                        <input type="radio" id="others" name="arrange-show" value="others" />
                        <label>Others</label>
                    </div>
                    <div id="arrange-display">
                        <label id="arrange-display-title">Viewing range: </label>
                        <input type="radio" id="private" onClick={async () => {
                            // 여기서 axios요청을 하고 결과값을 스토어에 저장한다.
                            let viewMode = 'private'
                            let annoList = await this.getAnnoData(viewMode); 
                            this.props.changeViweMode("CHANGE_VIEW_MODE", annoList)
                        }} name="arrange-display" value="private" />
                        <label>Private</label>

                        <input type="radio" id="others" onClick={async () => {
                            let viewMode = 'others'
                            let annoList = await this.getAnnoData(viewMode); 
                            this.props.changeViweMode("CHANGE_VIEW_MODE", annoList)
                        }} name="arrange-display" value="others" />
                        <label>Others</label>
                    </div>
                </div>
        )
    }
}

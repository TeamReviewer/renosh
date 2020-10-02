import React, { Component } from 'react'
import "./selectAnnoListArrange.less"
import axios from 'axios'
import { Button, Col } from 'antd';

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
            <div id="selectAnnoListRange">
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    {/*<label id="arrange-display-title">Viewing range: </label>*/}
                    <Button type="primary" shape="round" id="privateRange"
                    style={{ background: "rgba(255, 255, 255, 0.5)", borderColor: "#d6d6d6" }}
                    onClick={async () => {
                        let annoList = await this.getAnnoData('private'); 
                        this.props.changeViweMode("CHANGE_VIEW_MODE", annoList, 'private')
                    }} name="arrange-display" value="private">
                        Mine
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button type="primary" shape="round" id="othersRange" 
                    onClick={async () => {
                        let annoList = await this.getAnnoData('others'); 
                        this.props.changeViweMode("CHANGE_VIEW_MODE", annoList, 'others')
                    }} name="arrange-display" value="others" defaultChecked>
                        Others
                    </Button>
                </Col>
            </div>
        )
    }
}

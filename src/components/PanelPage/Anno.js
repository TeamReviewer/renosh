import React, {Component} from 'react';
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop, Form, Input, Switch } from 'antd';
import './anno.less'


class Anno extends Component {
   state = {
        cfiRange : this.props.cfiRange,
        username: this.props.username,
        text: this.props.text,
        memo: this.props.memo
   } 
    render() {   
        return (
            <Col id="anno" onClick={function(e){
                this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                this.props.changeLocation(this.state.cfiRange)
            }.bind(this)}>
                <span id="username">{this.state.username ? this.state.username : ""}</span>
                <span id="memo">{this.state.memo ? this.state.memo: ""}</span>
                <span id="text">{this.state.text ? this.state.text: ""}</span>
            </Col>
        )
    }
}

export default Anno;
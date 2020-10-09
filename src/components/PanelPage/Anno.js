import React, {Component} from 'react';
import { Col, Row, Avatar } from 'antd';
import { UserOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import './anno.less'
import axios from 'axios';

class Anno extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.state = {
            cfiRange: this.props.cfiRange,
            username: this.props.username,
            text: this.props.text,
            memo: this.props.memo,
            isOwn: false,
            dragged_anno_id: this.props.dragged_anno_id,
            anno_id: this.props.anno_id
        }
    }

    componentDidMount() {
        if (this.state.dragged_anno_id === 0){
            this.props.findAnno(0)
        }
        else if (this.state.dragged_anno_id === this.state.anno_id) {
            this.props.findAnno(this.inputRef.current.getBoundingClientRect().top)
        }
    }

    render() {
        let deleteButton = null
        let updateButton = null
        if (this.props.userid === this.props.account_id) {
            deleteButton = <button onClick={e => {
                axios.delete(process.env.REACT_APP_RENOSH_BASE_URL + 'api/highlights/' + this.props.id + '/' + this.props.anno_id)
                    .then(res => {
                        this.props.deleteAnno("DELETE_ANNO", this.props.anno_id)
                    })
            }}><DeleteOutlined /></button>
            updateButton = <button onClick={e => {
                //패널을 가장위로 올리고
                this.props.findAnno(0)
                // form에 inputAnno의 내용을 채워 넣는다.
                this.props.updateAnnoRequest(this.props.memo, this.props.anno_id)
            }}><FormOutlined /></button>
        }
        return (
            <Col id="panelAnno" ref={this.inputRef}>
                <Row id="panelProfile">
                    <Col id="userPhotoName">
                        <Avatar icon={<UserOutlined />} />
                        <span class="userName">{this.props.username ? this.props.username : ""}</span>
                    </Col>
                    <Col id="annoButton">
                        <div id="updateButton">{updateButton}</div>
                        <div id="deleteButton">{deleteButton}</div>
                    </Col>
                </Row>
                <Row>
                    <span id="memo">{this.props.memo ? this.props.memo : ""}</span>
                </Row>
                <Row>
                    <span id="text" onClick={function (e) {
                        this.props.moveToAnno("MOVE_EPUB", this.props.cfiRange)
                        this.props.changeLocation(this.props.cfiRange)
                    }.bind(this)}>{this.props.text ? this.props.text : ""}</span>
                </Row>
            </Col>
        )
    }
}

export default Anno;
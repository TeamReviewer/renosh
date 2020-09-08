<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7
import AnnoListContainer from '../../containers/PanelPage/AnnoList';
import SelectAnnoListArrangeContainer from '../../containers/PanelPage/SelectAnnoListArrange'
import axios from 'axios';
import { Row, Col, Button, Input, Switch } from 'antd';
import { DownloadOutlined  } from '@ant-design/icons';
import './annoBody.less';
<<<<<<< HEAD
=======
const { TextArea } = Input;
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7

class AnnoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            high_id: this.props.high_id,
            comment: '',
            isPublic: true
        }
        this.updateAnnoRequest = this.updateAnnoRequest.bind(this);
    }

    onChangeComment = ( e ) => {
        this.setState({ comment: e.target.value });
    };

    onChangeCheckbox = ( e ) => {
        this.setState({ isPublic: e });
    }

    getAnnoData = async (mode) => {
        let annos;
        if (mode === 'private' && this.props.user_id !== null) {
            annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/users/" + this.props.user_id + "/books/" + this.props.book_id + "/highlights");
        } else if (mode === 'others' || (this.props.user_id === null && mode === 'private')) {
            annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/book/" + this.props.book_id + "/public");
        } else
            annos = null;

        return annos.data;
    }
    handleMemoSubmit = async (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        e.persist(); // 비동기적으로 이벤트 속성을 참조하고 싶을 때
        let annoList;
        if (!this.state.isPublic) {
            await axios({
                method: 'put',
                url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/" + this.props.book_id + "/" + this.state.high_id,
                data: {
                    memo: this.state.comment,
                    scope: 'private'
                }
            });
            annoList = await this.getAnnoData('private');
        } else {
            await axios({
                method: 'put',
                url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/" + this.props.book_id + "/" + this.state.high_id,
                data: {
                    memo: this.state.comment,
                    scope: 'public'
                }
            });
            annoList = await this.getAnnoData('others');
        }
        // 바뀐 내용이 바로 rendering될 수 있도록 annoList의 내용을 업데이트 해준다.

        this.props.updateAnnoList("UPDATE_ANNOLIST", annoList);

        // 기존의 값들을 초기화 해준다.
        this.setState({ comment: '' });
        this.props.changeHighTextToNull("HIGHLIGHT_TO_NULL");
    }
    updateAnnoRequest(text, anno_id) {
        document.getElementsByClassName('inputAnno').value = text;
        this.setState({
            high_id: anno_id
        })
    }

    render() {
        let high_text = "";
        if (this.props.high_text) {
            high_text = <div>{this.props.high_text}</div>
        }
        return (
            <div id="annoBody">
                <Col>
                    <Row className="highText" xs={24} md={6}>
                        {high_text}
                    </Row>
                    <Row>
<<<<<<< HEAD
                        <Input className="inputAnno" placeholder=" Annotate here!" autoFocus/>
=======
                        <TextArea
                            className="inputAnno"
                            value={this.state.comment}
                            onChange={this.onChangeComment}
                            placeholder="Leave Annotations"
                            autoSize={{ minRows: 2, maxRows: 5 }}
                            />
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7
                    </Row>    
                    <Row className="inputBox"> 
                        <Col className="isPublic">
                            Public 
                        </Col>
                        <Col className="PublicButton">
<<<<<<< HEAD
                            <Switch />
=======
                            <Switch checked={this.state.isPublic} onChange={this.onChangeCheckbox} />
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7
                        </Col>
                        <Col>   
                            {/*
                            <Button onClick={this.handleMemoSubmit.bind(this)}
                            type="primary" shape="round" icon={<DownloadOutlined />}/>
                            */}
                            <Button onClick={this.handleMemoSubmit.bind(this)}
                            type="primary" icon={<DownloadOutlined />}>Save</Button>
                        </Col>
                    </Row>
                    <Row>
                        <SelectAnnoListArrangeContainer />   
                    </Row>
                    <Row>
<<<<<<< HEAD
                        <AnnoListContainer changeLocation={this.props.changeLocation} findAnno={this.props.findAnno} />   
=======
                        <AnnoListContainer changeLocation={this.props.changeLocation} findAnno={this.props.findAnno} updateAnnoRequest={this.updateAnnoRequest} />   
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7
                    </Row>
                </Col>
            </div>
        )
    }
}

export default AnnoBody;
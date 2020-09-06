import React, {Component} from 'react';
import AnnoListContainer from '../../containers/PanelPage/AnnoList';
import SelectAnnoListArrangeContainer from '../../containers/PanelPage/SelectAnnoListArrange'
import axios from 'axios';
import { Row, Col, Button, Input, Switch } from 'antd';
import { DownloadOutlined  } from '@ant-design/icons';
import './annoBody.less';

class AnnoBody extends Component {
    getAnnoData = async (mode) => {        
        let annos;
        if (mode === 'private' && this.props.user_id !== null){
            annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/"+this.props.user_id+"/books/"+this.props.book_id+"/highlights");
        }else if(mode === 'others' || (this.props.user_id === null && mode === 'private')){
            annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + this.props.book_id+ "/public");
        }else
            annos = null;
            
        return annos.data;
    }
    handleMemoSubmit =  async (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        e.persist(); // 비동기적으로 이벤트 속성을 참조하고 싶을 때
        let annoList;
        let isPublickChecked = e.target.form.elements[1].checked;
        if(!isPublickChecked){
            await axios({
                method:'put',
                url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/"+this.props.book_id+ "/"+this.props.high_id,
                data:{
                    memo: e.target.form.elements[0].value,
                    scope: 'private'
                }
            });
            annoList = await this.getAnnoData('private'); 
        } else {
            await axios({                
                method:'put',
                url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/"+this.props.book_id+ "/"+this.props.high_id,
                data:{
                    memo: e.target.form.elements[0].value,
                    scope: 'public'
                }
            });
            annoList = await this.getAnnoData('others');
        }

        // 바뀐 내용이 바로 rendering될 수 있도록 annoList의 내용을 업데이트 해준다.
        
        this.props.updateAnnoList("UPDATE_ANNOLIST", annoList);

        // 기존의 값들을 초기화 해준다.
        e.target.form.elements[0].value = '';
        this.props.changeHighTextToNull("HIGHLIGHT_TO_NULL");        
    }
    render() {
        let high_text = "";
        if(this.props.high_text) {
            high_text = <div>{this.props.high_text}</div>
        }
        return(
            <div id="annoBody">
                <Col>
                    <Row className="highText" xs={24} md={6}>
                        {high_text}
                    </Row>
                    <Row>
                        <Input className="inputAnno" placeholder=" Annotate here!" autoFocus/>
                    </Row>    
                    <Row className="inputBox"> 
                        <Col className="isPublic">
                            Public 
                        </Col>
                        <Col className="PublicButton">
                            <Switch />
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
                        <AnnoListContainer changeLocation={this.props.changeLocation} findAnno={this.props.findAnno} />   
                    </Row>
                </Col>
            </div>
        )
    }
}

export default AnnoBody;
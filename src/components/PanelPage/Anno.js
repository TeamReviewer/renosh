import React, {Component} from 'react';
import { Col, Row, Avatar } from 'antd';
import { UserOutlined, FormOutlined, DeleteOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import './anno.less'
import axios from 'axios';
//import likedImg from 'liked.png'
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
            anno_id: this.props.anno_id,
            likecount:this.props.like
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
        let likeButton = null
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
        if(this.props.account_id!=="visitor"){
            let liked_flag=0; 
            //유저의 좋아요 목록에 해당 anno가 있는지 확인
            if (this.props.likeList) {
                for (let i = 0; i < this.props.likeList.highlight_like.length; i++) {
                    if (this.props.likeList.highlight_like[i].bookid === this.props.id) {
                        if (this.props.likeList.highlight_like[i].like.includes(this.props.anno_id)) {
                            liked_flag = 1;
                        }
                    }
                }
            }
            //좋아요 x 상태 => 빈 하트
            if(!liked_flag){
            likeButton = <button onClick={async(e) =>{
                let likeid=null;
                if(!this.props.likeList){
                    console.log("NULL");
                }
                else{
                    likeid=this.props.likeList.id;
                }
                await axios({
                    method:'put',
                    url:process.env.REACT_APP_RENOSH_BASE_URL+'api/likes/'+this.props.account_id,
                    data:{
                        likeid: likeid,
                        bookid: this.props.id,
                        highlightid: this.props.anno_id
                    }
                }).then(res => {
                    this.props.updateLikeList("UPDATE_LIKELIST",res.data);
                    this.setState({likecount:this.state.likecount+1})
                })
            }}>
                <HeartTwoTone />
                </button> 
            }
            //좋아요 한 상태 => 색칠된 하트
            else{
                likeButton = <button onClick={async(e)=>{
                this.setState({likecount:this.state.likecount-1})
                let likeid=null;
                if(this.props.likeList) likeid=this.props.likeList.id;
                await axios({
                    method:'delete',
                    url:process.env.REACT_APP_RENOSH_BASE_URL+'api/likes/'+this.props.account_id,
                    data:{
                        likeid: likeid,
                        bookid: this.props.id,
                        highlightid: this.props.anno_id
                    }
                }).then(res => {
                    this.props.updateLikeList("UPDATE_LIKELIST",res.data);
                })
            }}>
                 <HeartFilled />
            </button>
            }
        }
        
        return (
            <Col id="panelAnno" ref={this.inputRef}>
                <Row id="panelProfile">
                    <Col id="userPhotoName">
                        <Avatar icon={<UserOutlined />} />
                        <span className="userName">{this.props.username ? this.props.username : ""}</span>
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
                <div id="likeButton">{likeButton}</div>
                <span id="like">LIKE {this.state.likecount}</span>
            </Col>
        )
    }
}

export default Anno;
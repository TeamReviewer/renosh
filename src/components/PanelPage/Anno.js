import React, {Component} from 'react';
import { Col, Row } from 'antd';
import { SmileTwoTone, FormOutlined, DeleteOutlined } from '@ant-design/icons';
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
            anno_id: this.props.anno_id,
            none_like : 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=171&b=171',
            like : 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=53&b=53'
        }
    }

    componentDidMount() {
        if (this.state.dragged_anno_id === 0){
            this.props.findAnno(0)
        }
        else if (this.state.dragged_anno_id === this.state.anno_id) {
            let annoTop = this.inputRef.current.getBoundingClientRect().top
            console.log(annoTop)
            this.props.findAnno(annoTop)
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
            <Col id="panelAnno">
                <Row id="panelProfile">
                    <Col id="userPhoto"><SmileTwoTone /></Col>
                    <Col id="username">{this.props.username ? this.props.username : ""}</Col>
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
                <div className='Like'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                    <h5> 좋아요 취소 </h5>
                </div>
                <div className='Like'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                    <h5> 좋아요 </h5>
                </div>
            </Col>
        )
    }
}

export default Anno;
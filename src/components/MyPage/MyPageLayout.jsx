import React, { Component } from 'react'
import MyInfo from './MyInfo'
import MyPageTOC from './MyPageTOC'
import MyPageTOCBody from './MyPageTOCBody';
import './myPageLayout.less'

export default class MyPageLayout extends Component {
    state = {
        mode: '',
    }
    changeBody = (type) => {
        if(type === 'myBookList') { 
            this.setState({mode: "myBookList"});
        } else if(type === 'myAnnoList') { 
            this.setState({mode: "myAnnoList"});
        }
    }
    render() {
        return (
            <div id="myPageContainer">
                <div id="leftLayout">
                    <MyInfo></MyInfo>
                    <MyPageTOC changeBody={this.changeBody}></MyPageTOC>
                </div>
                <div id="rightLayout">
                    <MyPageTOCBody mode={this.state.mode}></MyPageTOCBody>
                </div>
            </div>
        )
    }
}

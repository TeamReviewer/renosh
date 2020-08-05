import React, { Component } from 'react'
import MyInfo from './MyInfo'
import MyPageTOC from './MyPageTOC'
import MyPageTOCBody from './MyPageTOCBody';
import './MyPageLayout.css'

export default class MyPageLayout extends Component {
    state = {
        mode: 'myInfoChange',
    }
    changeBody = (type) => {
        if(type === 'myInfoChange') { 
            this.setState({mode: "myInfoChange"});
        } else if(type === 'myBookList') { 
            this.setState({mode: "myBookList"});
        } else if(type === 'myAnnoList') { 
            this.setState({mode: "myAnnoList"});
        }
    }
    render() {
        return (
            <div id="MyPageLayout">
                <div id="left">
                    <MyInfo></MyInfo>
                    <MyPageTOC changeBody={this.changeBody}></MyPageTOC>
                </div>
                <div id="right">
                    <MyPageTOCBody mode={this.state.mode}></MyPageTOCBody>
                </div>
            </div>
        )
    }
}

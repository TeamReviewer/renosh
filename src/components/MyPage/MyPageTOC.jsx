import React, { Component } from 'react';
import './myPageTOC.less'

export default class MyPageTOC extends Component {
    render() {
        return (
            <div id="MyPageTOCLayout">
                <ul>
                    <li onClick={()=> this.props.changeBody('myBookList')}>자기가 본 책</li>
                    <li onClick={()=> this.props.changeBody('myAnnoList')}>자기 annoList보기</li>
                </ul>
            </div>
        )
    }
}

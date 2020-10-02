import React, { Component } from 'react';
import './myPageTOCBody.less'
import MyBookList from '../../containers/MyPageContent/MyBookList';
import MyAnnoListContainer from '../../containers/MyPageContent/MyAnnoList';

export default class MyPageTOCBody extends Component {
    render() {
        let body;
        if(this.props.mode === 'myBookList') {
            body = <MyBookList></MyBookList>
        } else if(this.props.mode === 'myAnnoList') {
            body = <MyAnnoListContainer></MyAnnoListContainer>
        }
        return (
            <div id="MyPageTOCBodyLayout">
                {body}
            </div>
        )
    }
}

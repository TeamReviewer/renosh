import React, { Component } from 'react';
import './MyPageTOCBody.css'
import MyBookList from '../../containers/MyPageContent/MyBookList';
import MyInfoChangeContainer from '../../containers/MyPageContent/MyInfoChange';
import MyAnnoListContainer from '../../containers/MyPageContent/MyAnnoList';

export default class MyPageTOCBody extends Component {
    render() {
        let body;
        if(this.props.mode === 'myInfoChange') {
            body = <MyInfoChangeContainer></MyInfoChangeContainer>
        } else if(this.props.mode === 'myBookList') {
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

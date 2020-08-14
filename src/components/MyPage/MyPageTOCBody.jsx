import React, { Component } from 'react';
import './MyPageTOCBody.css'
import MyAnnoList from '../MyPageContent/MyAnnoList';
// import MyBookList from '../MyPageContent/MyBookList';
import MyBookListContainer from '../../containers/MyPageContent/MyBookList'
import MyInfoChange from '../MyPageContent/MyInfoChange';

export default class MyPageTOCBody extends Component {
    render() {
        let body;
        if(this.props.mode === 'myInfoChange') {
            body = <MyInfoChange></MyInfoChange>            
        } else if(this.props.mode === 'myBookList') {
            body = <MyBookListContainer></MyBookListContainer>
        } else if(this.props.mode === 'myAnnoList') {
            body = <MyAnnoList></MyAnnoList>
        }
        return (
            <div id="MyPageTOCBodyLayout">
                {body}
            </div>
        )
    }
}

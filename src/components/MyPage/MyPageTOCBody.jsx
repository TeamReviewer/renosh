import React, { Component } from 'react';
import './MyPageTOCBody.css'
import MyAnnoList from '../MyPageContent/MyAnnoList';
<<<<<<< HEAD
import MyBookList from '../../containers/MyPage/MyBookList';
import MyInfoChange from '../MyPageContent/MyInfoChange';
=======
import MyBookList from '../MyPageContent/MyBookList';
import MyInfoChangeContainer from '../../containers/MyPageContent/MyInfoChange';
>>>>>>> master

export default class MyPageTOCBody extends Component {
    render() {
        let body;
        if(this.props.mode === 'myInfoChange') {
            body = <MyInfoChangeContainer></MyInfoChangeContainer>
        } else if(this.props.mode === 'myBookList') {
            body = <MyBookList></MyBookList>
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

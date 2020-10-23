import React, { Component } from 'react';
import './myPageTOC.less';


export default class MyPageTOC extends Component {
    render() {
        return (
            <div className="myPageTOCLayout">
                <div className="myBooksTOC">
                    <div onClick={()=> this.props.changeBody('myBookList')}>Books</div>
                </div>
                <div className="myAnnosTOC">
                    <div onClick={()=> this.props.changeBody('myAnnoList')}>Annotations</div>
                </div>
            </div>
        )
    }
}

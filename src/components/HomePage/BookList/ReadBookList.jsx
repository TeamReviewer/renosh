import React, { Component } from 'react'
import BookContainer from '../../../containers/ListPage/Book';
import './readList.less'

export default class ReadBookList extends Component {
    render() {
        let list = null;
        if (this.props.myBook.length !== 0){
            list = this.props.myBook.map(
                book => (<BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />)
            )
        }
        
        return (
            <div id="readList">
                <div id="readListbody" >
                    {list ? list : '책을 한 권도 읽지 않았습니다.'}
                </div>
                
            </div>
        )
    }
}

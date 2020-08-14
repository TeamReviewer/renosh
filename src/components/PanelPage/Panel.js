import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo'
// import AnnoBody from './AnnoBody';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody'
import './Panel.css'


class Panel extends Component {    
    state={
        book_id:this.props.book_id,
        high_id:this.props.high_id,
        high_text: this.props.high_text
    }
    render() {
        return(
            <div id="panel">                
                <BookBriefInfoContainer />                
                <AnnoBodyContainer changeLocation={this.props.changeLocation} book_id={this.state.book_id} high_id={this.state.high_id}  />
            </div>
        )
    }
}

export default Panel;
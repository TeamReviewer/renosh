import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo'
import AnnoBody from './AnnoBody';
import './Panel.css'


class Panel extends Component {    
    state={
        book_id:this.props.book_id,
        high_id:this.props.high_id
    }
    render() {
        return(
            <div id="panel">                
                <BookBriefInfoContainer />                
                <AnnoBody changeLocation={this.props.changeLocation} book_id={this.state.book_id} high_id={this.state.high_id} />
            </div>
        )
    }
}

export default Panel;
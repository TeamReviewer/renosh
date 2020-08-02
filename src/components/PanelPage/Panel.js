import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo'
import AnnoBody from './AnnoBody';
import './Panel.css'


class Panel extends Component {    
    render() {
        return(
            <div id="panel">                
                <BookBriefInfoContainer />                
                <AnnoBody changeLocation={this.props.changeLocation} />
            </div>
        )
    }
}

export default Panel;
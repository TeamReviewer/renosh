import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo'
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody'
import './Panel.css'


class Panel extends Component {
    findAnno() {
        let scroll = this.refs.scrollElement || document.getElementById('scrollElement');
        scroll.scrollTop = 2000;
    }
    render() {
        
        return(
            <div id="panel" ref="scrollElement" >
                <BookBriefInfoContainer /> 
                <AnnoBodyContainer changeLocation={this.props.changeLocation} findAnno={this.findAnno}/>                
            </div>
        )
    }
}

export default Panel;
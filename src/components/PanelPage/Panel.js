import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo'
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody'
import './Panel.css'


class Panel extends Component {
    findAnno(top) {
        let scroll = document.getElementById('panel');
        scroll.scrollTop = top;
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
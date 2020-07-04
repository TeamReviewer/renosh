import React, {Component} from 'react';
import BookBriefInfo from './BookBriefInfo';
import AnnoBody from './AnnoBody';
import './Panel.css'


class Panel extends Component {    
    render() {
        return(
            <div id="panel">                
                <BookBriefInfo image="https://upload.wikimedia.org/wikipedia/ko/thumb/0/05/Littleprince.JPG/200px-Littleprince.JPG" author="JongHo" date="2020-0611" title="title_KHAN" alt="alt" />
                <AnnoBody />
            </div>
        )
    }
}

export default Panel;
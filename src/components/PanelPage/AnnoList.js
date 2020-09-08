import React, {Component} from 'react';
import AnnoContainer from '../../containers/PanelPage/Anno';
<<<<<<< HEAD
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop, Form, Input, Switch } from 'antd';
=======
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7
import './annoList.less';

class AnnoList extends Component {
    

    render() {
        let list =[];
        if(this.props.annoList.length !== 0 && this.props.id === this.props.annoList[0].bookid){
            list = this.props.annoList.map(
                anno => (<AnnoContainer 
                    key={anno.id}
                    id={anno.bookid} 
                    username={anno.username}
                    cfiRange={anno.location}
                    text={anno.text}
                    anno_id={anno.id}
                    ts={anno._ts}
                    changeLocation={this.props.changeLocation}
                    memo={anno.memo}
                    userid={anno.userid}
                    findAnno={this.props.findAnno}
                    updateAnnoRequest={this.props.updateAnnoRequest}
                />)
            )
        }
        
        
        return (
            <div className="AnnoList">
               {list}
            </div>
        )
    }
}


export default AnnoList;
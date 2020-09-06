import React, {Component} from 'react';
import AnnoContainer from '../../containers/PanelPage/Anno';

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
                />)
            )
        }
        
        
        return (
            <div>
               {list}
            </div>
        )
    }
}


export default AnnoList;
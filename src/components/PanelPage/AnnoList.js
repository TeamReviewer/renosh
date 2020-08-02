import React, {Component} from 'react';
import AnnoContainer from '../../containers/PanelPage/Anno';

class AnnoList extends Component {
    state = {
        annos: this.props.annoList
    }

    render() {
        let list =[];
        if(this.props.annoList.length !== 0 && this.props.id === this.props.annoList[0].bookid){
            list = this.state.annos.map(
                anno => (<AnnoContainer 
                    key={anno.id}
                    id={anno.bookid} 
                    user_id={anno.userid}
                    cfiRange={anno.location}
                    text={anno.text}
                    anno_id={anno.id}
                    ts={anno._ts}
                    changeLocation={this.props.changeLocation}
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
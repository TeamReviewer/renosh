import React, { Component } from 'react'
import axios from 'axios'
import MyAnnoContainer from '../../containers/MyPageContent/MyAnno';

export default class MyAnnoList extends Component {
    state={
        MyAnnos: null,
        isLoading : true,
        user_id : this.props.user_id
    }
    getMyAnno() {
        axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/"+this.state.user_id+"/highlights/").then(
            req=>{
                this.setState({
                    MyAnnos: req.data,
                    isLoading:false
                })
            }
        );
    }
    componentDidMount(){
        this.getMyAnno();
    }
    render() {
        let list; 
        if(!this.state.isLoading){
            list = this.state.MyAnnos.map(
                anno => (<MyAnnoContainer 
                    key={anno.id}
                    id={anno.bookid} 
                    username={anno.username}
                    cfiRange={anno.location}
                    text={anno.text}
                    anno_id={anno.id}
                    ts={anno._ts}
                    date={anno.created_date}
                    changeLocation={this.props.changeLocation}
                    memo={anno.memo}
                    title={anno.title}
                />)
            )
        }        
        return (
            <div>
                <h3>나의 메모</h3>
               {list}
            </div>
        )
    }
}


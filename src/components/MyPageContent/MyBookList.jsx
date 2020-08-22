import React, { Component } from 'react'
import axios from 'axios'
import './MyBookList.css'

export default class MyBookList extends Component {
    state = {
        mybooksId: [],
        isLoading : true
    }

    // TODO :  
    getMyBookIdData = async () => {
        let user_id = this.props.id;  
        const myBookId = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/" + user_id + "/my_book_list");
        debugger;
        this.setState({
        mybooksId: myBookId.data,
        isLoading: false
        }) 

        console.log(myBookId);       
    }

    componentWillMount() {      
        this.getMyBookIdData();
    }
    
    // TODO 
    render() {
        return (
            <div>
                <h1>My Book list</h1>
            </div>
        )
    }
}

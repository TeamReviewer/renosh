import React, { Component } from 'react';
import InfoData from './InfoData'
import axios from 'axios'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default class Info2 extends Component {
    state = {
        book: {},
        isLoading : true,
        isUnmount: false
    }       

    getBookInfoDataFromServer = async (book_id) => {
        await axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/" + book_id, {
            cancelToken: source.token
        })
        .then(res =>{
            console.log("this is isUnmount = ", this.state.isUnmount)
            if(!this.state.isUnmount){
                console.log("받아옴")
                this.setState({
                    book: res.data,
                    isLoading: false
                })
            }
        }).catch(err => {
            console.log(err)
        });
    }   

    componentDidMount() {
        // URL을 통한 website접근일 경우
        // this.setState({
        //     isUnmount: false
        // })
        if(this.props.book_id === undefined || this.props.book_id === null) {
            let book_id = this.props.match.params.book_id;
            this.getBookInfoDataFromServer(book_id);
        } else {
            this.setState({
                isLoading:false
            })
        }
    }
    componentWillUnmount(){
        // source.cancel('Operation canceled by the user.');
        this.setState({
            isUnmount: true
        }, console.log("언마운트 됨", this.state.isUnmount))
        
    }
    render() {
        let infoData;
        if(!this.state.isLoading) {
            infoData = <InfoData image={this.state.book.image} title={this.state.book.title} summary={this.state.book.summary} />
        }else {
            infoData = <InfoData image={this.props.image} title={this.props.title} summary={this.props.summary} />
        }
        return (
            <div>
                {this.state.isLoading ? "isLoading ... " : infoData}
            </div>
        )
    }
}

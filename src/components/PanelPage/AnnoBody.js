import React, {Component} from 'react';
import AnnoListContainder from '../../containers/PanelPage/AnnoList';
import axios from 'axios';

class AnnoBody extends Component {
    state = {
        book_id:this.props.book_id,
        high_id:this.props.high_id,
        inputAnno: ''
    }
    handleMemoChange = (e) => {
        this.setState({
            inputAnno: e.target.value
        });
    }
    handleMemoSubmit =  async (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        debugger;

        let res = await axios({
            method:'put',
            url:`https://renosh-server.azurewebsites.net/api/highlights/${this.props.book_id}/${this.props.high_id}`,
            data:{
                memo: this.state.inputAnno
            }
        });
        
        // res;
    }
    handleInitSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.setState({ // 상태 초기화
            inputAnno: ''
        })
    }
    render() {
        return(
            <div id="annoBody">
                <form onSubmit={this.handleInitSubmit}>
                    <input id="inputAnno" value={this.state.name} onChange={this.handleMemoChange.bind(this)} name="inputAnno" placeholder="content" autoFocus/>
                    <button id="saveAnno" onClick={this.handleMemoSubmit.bind(this)}>Save</button>
                    <input type="checkbox" name="Private" />Private
                </form>  
                <br></br>          
                <div className="switch">
                    <input type="checkbox"  ></input>Is Server?
                    <span className="slider"></span>
                </div>           
                <AnnoListContainder changeLocation={this.props.changeLocation} />   
            </div>
        )
    }
}

export default AnnoBody;
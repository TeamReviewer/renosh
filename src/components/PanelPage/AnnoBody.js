import React, {Component} from 'react';
import AnnoListContainder from '../../containers/PanelPage/AnnoList';
import axios from 'axios';

class AnnoBody extends Component {
    state = {
        book_id:this.props.book_id,
        high_id:this.props.high_id,
        memo: null
    }
    handleFormSubmit =  async event =>{
        event.preventDefault();
        let res = await axios({
            method:'put',
            url:'https://renosh-server.azurewebsites.net/api/highlights/'+this.props.book_id+'/'+this.props.high_id,
            data:{
                memo:this.state.memo
            }
        });
        alert("Saved Successfully!")
    }
    handleMemoChange = event =>{
        this.setState ({memo:event.target.value});
    }
    render() {
        return(
            <div id="annoBody">
                <form>
                    <input type="text" id="inputAnno" name="inputAnno" placeholder="content" onChange={this.handleMemoChange.bind(this)} autoFocus/>
                    <button id="saveAnno" onClick={this.handleFormSubmit.bind(this)}>Save</button>
                </form>
                <br></br>          
                <div className="switch">
                    <input type="checkbox"  ></input>is Server?
                    <span className="slider"></span>
                </div>           
                <AnnoListContainder changeLocation={this.props.changeLocation} />
            </div>
        )
    }
}

export default AnnoBody;
import React, {Component} from 'react';
import AnnoListContainder from '../../containers/PanelPage/AnnoList';
import axios from 'axios';

class AnnoBody extends Component {
    state = {
        book_id:this.props.book_id,
        high_id:this.props.high_id,
        high_text: this.props.high_text,
        inputAnno: ''
    }
    getAnnoData = async () => {
        const annos = await axios.get("https://renosh-server.azurewebsites.net/api/highlights/book/" + this.props.book_id);
        return annos.data;
    }
    handleMemoChange = (e) => {
        this.setState({
            inputAnno: e.target.value
        });
    }
    handleMemoSubmit =  async (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        e.persist();
        await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/"+this.props.book_id+ "/"+this.props.high_id,
            data:{
                memo: this.state.inputAnno
            }
        });    
        let annoList = await this.getAnnoData(); 
        this.props.updateAnnoList("UPDATE_ANNOLIST", annoList, this.props.high_id, e.target.form.elements[0].value);
        e.target.form.elements[0].value = '';
        this.props.changeHighTextToNull("HIGHTEXT_TONULL");        
    }   
    handleInitSubmit = (e) => {
        console.log("handleInitSubmit is working!!!!!!!!!!!!")
        e.preventDefault(); // 페이지 리로딩 방지
        console.log("annoBody상태 초기화")
        this.setState({ // 상태 초기화
            inputAnno: '',
            high_text:''
        })
    }
    render() {
        return(
            <div id="annoBody">
                <form onSubmit={() => this.handleInitSubmit}>
                    text: {this.props.high_text}<br />
                    <input id="inputAnno" value={this.state.name} 
                        onChange={this.handleMemoChange.bind(this)} 
                        name="inputAnno" placeholder="content" autoFocus/>
                    <input type="checkbox" name="Private" />Private
                    <button id="saveAnno" onClick={this.handleMemoSubmit.bind(this)}>Save</button>
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
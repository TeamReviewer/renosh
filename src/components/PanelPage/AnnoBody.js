import React, {Component} from 'react';
import AnnoListContainder from '../../containers/PanelPage/AnnoList';
import SelectAnnoListArrangeContainer from '../../containers/PanelPage/SelectAnnoListArrange'
import axios from 'axios';

class AnnoBody extends Component {
    getAnnoData = async () => {
        const annos = await axios.get("https://renosh-server.azurewebsites.net/api/highlights/book/" + this.props.book_id);
        return annos.data;
    }
    handleMemoSubmit =  async (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        e.persist(); // 비동기적으로 이벤트 속성을 참조하고 싶을 때

        await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/highlights/"+this.props.book_id+ "/"+this.props.high_id,
            data:{
                memo: e.target.form.elements[0].value
            }
        });    

        // 바뀐 내용이 바로 rendering될 수 있도록 annoList의 내용을 업데이트 해준다.
        let annoList = await this.getAnnoData(); 
        this.props.updateAnnoList("UPDATE_ANNOLIST", annoList);

        // 기존의 값들을 초기화 해준다.
        e.target.form.elements[0].value = '';
        this.props.changeHighTextToNull("HIGHLIGHT_TO_NULL");        
    }
    render() {
        let high_text = "";
        if(this.props.high_text) {
            high_text = <div>{this.props.high_text}</div>
        }
        return(
            <div id="annoBody">
                <form>
                    {high_text}
                    <input id="inputAnno" 
                        name="inputAnno" placeholder="content" autoFocus/>
                    <input type="checkbox" name="Private" />Private
                    <button id="saveAnno" onClick={this.handleMemoSubmit.bind(this)}>Save</button>
                </form>  
                <SelectAnnoListArrangeContainer />      
                <AnnoListContainder changeLocation={this.props.changeLocation} />   
            </div>
        )
    }
}

export default AnnoBody;
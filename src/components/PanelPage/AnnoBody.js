import React, {Component} from 'react';
import AnnoListContainder from '../../containers/PanelPage/AnnoList';

class AnnoBody extends Component {
    render() {
        return(
            <div id="annoBody">
                <input id="inputAnno" name="inputAnno" placeholder="content" />
                <button id="saveAnno" >Save</button>      
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
import React, {Component} from 'react';
import AnnoList from './AnnoList';

class AnnoBody extends Component {
    render() {
        return(
            <div id="annoBody">
                <input id="inputAnno" name="inputAnno" placeholder="content" />
                <button id="saveAnno" >Save</button>      
                <br></br>          
                <div className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </div>           
                <AnnoList />   
            </div>
        )
    }
}

export default AnnoBody;
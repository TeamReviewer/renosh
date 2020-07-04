import React, {Component} from 'react';
import './ListForm.css'

class ListForm extends Component {
    render() {
        return(
            <div id="listForm">
                <div id="searchDiv">
                    <input id="search" name="search" placeholder="search: " />
                    <button id="searchBtn" >search</button>
                </div>

                <button id="addBtn" >+</button>
            </div>
        )
    }
}

export default ListForm;
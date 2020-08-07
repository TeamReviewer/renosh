import React, {Component} from 'react';
import './ListForm.css'
import { Link } from 'react-router-dom';
import LoginButton from '../LoginPage/LoginButton' 

class ListForm extends Component {
    render() {
        return(
            <div id="listForm">
                <div id="searchDiv">
                    {/* <img src="../../../images/magnifying-glass.png" alt="glassImage"></img>
                    <input id="search" name="search" placeholder="search: " />
                    <button id="searchBtn" >search</button> */}
                </div>

                <div id="myPage">
                    <Link to={'myPage'}>MyPage</Link>
                </div>
                <LoginButton/>
                {/* <button id="addBtn" >+</button> */}
            </div>
        )
    }
}

export default ListForm;
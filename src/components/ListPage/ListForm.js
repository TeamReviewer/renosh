import React, {Component} from 'react';
import './ListForm.css'
import { Link } from 'react-router-dom';
import LoginButton from '../LoginPage/LoginButton' 

class ListForm extends Component {
    render() {
        return(
            <div id="listForm">
                <div id="searchDiv">
                </div>

                <div id="myPage">
                    <Link to={'myPage'}>MyPage</Link>
                </div>
                <LoginButton/>
            </div>
        )
    }
}

export default ListForm;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.less';

class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <div className="headerContent">
                    <Link to={'/'}><div id="renoshTitle">Renosh</div></Link>
                    <div id="renoshSlogan">Read, note and share your book together</div>
                </div>
            </div>
        )
    }
}

export default Header;

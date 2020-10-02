import React from 'react';
import { Link } from 'react-router-dom';
import './header.less';

class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <div className="header">
                    {/* <Title level={2}>Renosh</Title>
                    <Title level={4}>Read Note Share our world</Title> */}
                    <Link to={'/'}><div id="renosh-title">Renosh</div></Link>
                    <div id="renosh-slogan">Read, note and share your book together</div>
                </div>
            </div>
        )
    }
}

export default Header;

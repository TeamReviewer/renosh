import React from 'react';
import './header.less';

class Header extends React.Component{
    render(){
        return(
            <div id="header" xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="header">
                    {/* <Title level={2}>Renosh</Title>
                    <Title level={4}>Read Note Share our world</Title> */}
                    <div id="renosh-title">Renosh</div>
                    <div id="renosh-slogan">Read, note and share your book together</div>
                </div>
            </div>
        )
    }
}

export default Header;

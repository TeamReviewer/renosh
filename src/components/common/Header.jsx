import React from 'react';
import './header.less';
<<<<<<< HEAD
import { Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';
const { Title } = Typography;
=======
>>>>>>> 7c0102a4c106d8c22fd296321eea60e4eb1ed5b7

class Header extends React.Component{
    render(){
        return(
            <div id="h">
                <div id="header" className="header">
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

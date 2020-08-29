import React from 'react';
import './Header.less';
import { Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';
const { Title } = Typography;

class Header extends React.Component{
    render(){
        return(
            <div id="header" className="header">
                {/* <Title level={2}>Renosh</Title>
                <Title level={4}>Read Note Share our world</Title> */}
                <div id="renosh-title">Renosh</div>
                <div id="renosh-slogan">Read Note Share our World</div>
            </div>
        )
    }
}

export default Header;

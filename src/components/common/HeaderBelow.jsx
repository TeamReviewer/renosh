import React from 'react';
import LoginButton from '../../containers/LoginPage/UserData';
import {  HomeOutlined, BookOutlined } from '@ant-design/icons'; //SettingOutlined, SearchOutlined, 
import { Link } from 'react-router-dom';
import { Row, Button } from 'antd';
import './headerBelow.less';

class HeaderBelow extends React.Component{
    render(){
        let myBooksButton = null
        if (this.props.isState === 'Authenticated') {
            myBooksButton = <Link to={'/myPage'}>
                    <Button type="text" icon={<BookOutlined />} style={{color: "#2b335b"}}>My Books</Button>
                </Link>
        }
        return(
            <Row id="headerBelow">
                <div className="buttonsDiv">
                    <Link to={'/'}><LoginButton/></Link>
                    {myBooksButton}
                    <Link to={'/'}>
                        <Button type="text" icon={<HomeOutlined />} style={{color: "#2b335b", fontSize: "0.5"}}>Home</Button>
                    </Link>
                    {/* <Link to={'/'}><Button type="text" icon={<SearchOutlined />} style={{color: "#2b335b"}}>Discover</Button></Link>
                    <Link to={'/'}><Button type="text" icon={<SettingOutlined />} style={{color: "#2b335b"}}>Settings</Button></Link> */}
                </div>               
            </Row>
        )
    }
}

export default HeaderBelow;
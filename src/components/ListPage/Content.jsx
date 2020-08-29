import React from 'react';
import './content.less';
import { Space, Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';
import { SearchOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

class Content extends React.Component{
    render(){
        return(
            <div id="content" className="content">
                <Row>
                    <div id="content-buttons">
                        <Space>
                            <Button icon={<HomeOutlined />}>Home</Button>
                            <Button icon={<SearchOutlined />}>Discover</Button>
                            <Button icon={<SettingOutlined />}>Settings</Button>
                        </Space>
                    </div>                    
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <Row>
                            <div id="content-row-title">
                                <Space>
                                    Recommended For You
                                    <Button shape="round" size="small">
                                        <div id="btn-font-size">
                                            More
                                        </div>
                                    </Button>
                                </Space>
                            </div>
                        </Row>
                        <Row>
                            <div id="content-row-3">
                                Book List 1
                            </div>
                        </Row>
                        <Row>
                            <div id="content-row-title">
                                <Space>
                                    Best Book List
                                    <Button shape="round" size="small">
                                        <div id="btn-font-size">
                                            More
                                        </div>
                                    </Button>
                                </Space>
                            </div>
                        </Row>
                        <Row>
                            <div id="content-row-5">
                                Book List 2
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Content;
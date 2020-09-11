import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody';
import './panel.less';
import { Drawer, Button, Row, Col } from 'antd';
import { ShrinkOutlined, ExpandAltOutlined } from '@ant-design/icons';

class Panel extends Component {
    findAnno(top) {
        let scroll = document.getElementById('panel');
        scroll.scrollTop = top;
    }

    render() {
        return(
            <Drawer
                destroyOnClose
                // title="Read, note and share your book together"
                width={500}
                onClose={this.props.handlePanelOpen}
                visible={this.props.visible}
                bodyStyle={{ padding: 0 }}
                /*
                footer={
                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                        <Button onClick={this.props.handlePanelOpen} style={{ marginRight: 12 }}>
                            Cancel
                        </Button>
                    </div>
                }
                */
            >
                <Row>
                    <Col id="leftBar"
                    xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div id="buttonDiv">
                            <Button id="expandButton" type="text">
                                <ExpandAltOutlined size={24}/>
                            </Button>
                            <Button id="shrinkButton" type="text"
                            onClick={this.props.handlePanelOpen} >
                                <ShrinkOutlined size={24}/>
                            </Button>
                        </div>
                    </Col>
                    <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                        <BookBriefInfoContainer />
                        <AnnoBodyContainer changeLocation={this.props.changeLocation} findAnno={this.findAnno}/>  
                    </Col> 
                    {/*
                    <div id="panel" ref="scrollElement">                 
                    </div>
                    */}
                </Row>
            </Drawer>
        )
    }
}

export default Panel;
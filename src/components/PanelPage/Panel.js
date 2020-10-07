import React, { Component } from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody';
import './panel.less';
import { Drawer, Button, Row, Col } from 'antd';
import { ShrinkOutlined, ExpandAltOutlined } from '@ant-design/icons';

class Panel extends Component {
    findAnno = (top) => {
        if(this._reactInternalFiber.firstEffect.stateNode.className === "ant-drawer-mask")
            this._reactInternalFiber.firstEffect.stateNode.nextSibling.firstElementChild.firstElementChild.firstElementChild.nextSibling.scrollTo(0, top)
    }
    render() {
        return (
            <Drawer className="panelContainer"
                destroyOnClose
                // title="Read, note and share your book together"
                //width={500}
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
                <Row >
                    <Col id="leftBar"
                        xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div id="buttonDiv">
                            <Button id="expandButton" type="text">
                                <ExpandAltOutlined size={24} />
                            </Button>
                            <Button id="shrinkButton" type="text"
                                onClick={this.props.handlePanelOpen} >
                                <ShrinkOutlined size={24} />
                            </Button>
                        </div>
                    </Col>
                    <Col id="rightBar"
                    xs={21} sm={21} md={21} lg={21} xl={21}>
                        <BookBriefInfoContainer />
                        <AnnoBodyContainer 
                            changeLocation={this.props.changeLocation} 
                            findAnno={this.findAnno}
                            high_id={this.props.high_id}
                            high_text={this.props.high_text}
                            deleteHigh={this.props.deleteHigh}
                            dragged_anno_id={this.props.dragged_anno_id}
                        />  
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
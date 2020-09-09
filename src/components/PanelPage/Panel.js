import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody';
import './panel.less';
import { Drawer, Button } from 'antd';

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
                bodyStyle={{ paddingBottom: 80 }}
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
            >
                <BookBriefInfoContainer />
                <AnnoBodyContainer changeLocation={this.props.changeLocation} findAnno={this.findAnno}/>   
                {/*
                <div id="panel" ref="scrollElement">                 
                </div>
                */}
            </Drawer>
        )
    }
}

export default Panel;
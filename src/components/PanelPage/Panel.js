import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody';
import './panel.less';
import { Drawer, Button } from 'antd';

// visible, handleDrawer
class Panel extends Component {
    findAnno(top) {
        let scroll = document.getElementById('panel');
        scroll.scrollTop = top;
    }

    render() {
        return(
            <Drawer
                destroyOnClose
                title="Create a new account"
                width={500}
                onClose={this.props.handleDrawer}
                visible={this.props.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                        <Button onClick={this.props.handleDrawer} style={{ marginRight: 25 }}>
                            Cancel
                        </Button>
                    </div>
                }
            >
                <div id="panel" ref="scrollElement" >
                    <BookBriefInfoContainer /> 
                    <AnnoBodyContainer changeLocation={this.props.changeLocation} findAnno={this.findAnno}/>                
                </div>
            </Drawer>
        )
    }
}

export default Panel;
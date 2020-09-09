import React, {Component} from 'react';
import BookBriefInfoContainer from '../../containers/PanelPage/BookBriefInfo';
import AnnoBodyContainer from '../../containers/PanelPage/AnnoBody';
import './panel.less';
import { Drawer } from 'antd';

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
                width={720}
                onClose={this.props.handleDrawer}
                visible={this.props.visible}
                bodyStyle={{ paddingBottom: 80 }}
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
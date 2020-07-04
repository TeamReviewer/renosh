import React, {Component} from 'react';
import Viewer from './Viewer'
import Panel from '../PanelPage/Panel'
import './ViewerBody.css'

class ViewerBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPanelOpen : false,
        }
    }

    handlePanelOpen() {        
        this.setState({isPanelOpen : !this.state.isPanelOpen})        
    }    
   
    render() {        
        return(
            <div id="viewerBody">
                <div id="viewerBodyButtonLayer">
                    <button id="backBtn" >back</button>
                    <button onClick={() => this.handlePanelOpen()}>Panel</button>
                </div>                
                <Viewer></Viewer> 
                {this.state.isPanelOpen ? <Panel /> : ''}               
            </div>            
        )
    }
}

export default ViewerBody;
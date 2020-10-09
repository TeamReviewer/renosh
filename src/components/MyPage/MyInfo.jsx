import React, { Component } from 'react'
import './myInfo.less'

export default class MyInfo extends Component {
    render() {
        return (            
            <div id="infoLayout">
                <div id="image">
                    {/* axios요청을 통해 추후 서버로부터 현재 userId에 해당하는 이미지를 가져올 수 있도록 한다. */}
                    <img id="user_info_image" src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg" alt="user_info_image"/>
                </div>                
            </div>            
        )
    }
}

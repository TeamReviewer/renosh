import React, { Component } from 'react'
import './MyInfo.css'

export default class MyInfo extends Component {
    render() {
        return (
            <div id="infoLayout">
                {/* 현재 선택된 유저의 이름을 선택한다. */}
                <div id="name">
                    name: jongho
                </div>
                <div id="image">
                    image{/* <img src="" alt=""/> */}   
                </div>                
            </div>
        )
    }
}

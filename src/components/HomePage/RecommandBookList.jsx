import React, { Component } from 'react'
import EmotionTop3 from './EmotionTop3'
import HighlightTop3 from './HighlightTop3'

export default class RecommandBookList extends Component {
    render() {
        return (
            <div>
                {/* 두 개의 컴포넌트 목록이 요구됨 */}

                {/* 1. highlight개수 top 3 책 목록 */}
                <HighlightTop3></HighlightTop3>

                {/* 2. best감정 top 3 책 목록 */}
                <EmotionTop3></EmotionTop3>
            </div>
        )
    }
}

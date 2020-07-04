import React, {Component} from 'react';

class Info extends Component {

    state = {
        imageUrl: 'https://image.yes24.com/goods/49855699/800x0',
        book : {
            title: "어린왕자",
            description: "프랑스 공군 비행사이자 작가인 앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)가 1943년 발표한 소설로 줄거리는 어느 사막 한가운데에 불시착한 조종사가 어린 왕자를 만나 왕자의 이야기를 듣게 된다는 내용이다."
        }
    }

    moveToNextPage(){
        // Update Browser Routing
        
    }

    
    render() {
        return(
            <div id="Info">
                <img src={this.state.imageUrl } alt="The Little Prince" width="500" height="600"/>
                <p>{this.state.book.title}</p>
                <p>{this.state.book.description}</p>
                <button onClick={()=>this.moveToNextPage()}>Start Reading</button>
            </div>
        )
    }
}

export default Info;
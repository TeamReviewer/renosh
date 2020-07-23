import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import './info.css';
import axios from 'axios';

function Info(props){
    const [imageUrl, setImageUrl] = useState(null);
    const getImageUrl = async() => {
        const imageUrl = await axios.get("http://renosh.koreacentral.cloudapp.azure.com:5000/api/books/6f52fed6-19ca-4dfa-885c-e3cf9d6c3dad");         
        setImageUrl(imageUrl);
    }
    const history = useHistory();          
    const [bookInfo, setBookInfo] = useState(
        {
            imageUrl,
            book : {
                title: "어린왕자",
                description: "프랑스 공군 비행사이자 작가인 앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)가 1943년 발표한 소설로 줄거리는 어느 사막 한가운데에 불시착한 조종사가 어린 왕자를 만나 왕자의 이야기를 듣게 된다는 내용이다."
            }
        }
    )

    return(
       
        <div id="Info">
            {
                getImageUrl
            }
            <h1>{bookInfo.imageUrl}sdsdsd</h1>
            <img src={bookInfo.imageUrl } alt="The Little Prince" width="500" height="600"/>
            <p id="book_title">{bookInfo.book.title}</p>
            <p id="book_description">{bookInfo.book.description}</p>            
            <Link id="book_link" to={`/epub`} >Start Reading</Link>            
        </div>
    )
}

export default Info;
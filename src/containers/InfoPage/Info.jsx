import { connect } from "react-redux";
import InfoPageLayout from "../../components/InfoPage/InfoPageLayout";

export default connect(
    function(state) {
        var book_id = state.selected_book_id;
        
        var title, image, summary, author, epubURI;
        let positive, neutral, negative;
        
        let userid, username;

        userid = state.account ? state.account.accountIdentifier : 'visitor';
        username = state.account ? state.account.name : 'visitor';

        for(let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            if(book.id === book_id) {
                title = book.title;
                image = book.image;
                summary = book.summary;
                author = book.author;
                epubURI = book.epubURI;
                positive = book.emotion[0].positive;
                neutral = book.emotion[1].neutral;
                negative = book.emotion[2].negative; 
                break;
            }
        }

        let isExist;
        for(let i = 0; i< state.myBookList.length; i++){
            if(state.myBookList[i].bookid === book_id){
                isExist = true;
                break;                
            }else{
                isExist = false;
            }          
        }
        

        return{
            id:book_id, title, image, summary, author, epubURI,
            positive, neutral, negative,
            userid, username,
            userbooklistid: state.userBookList.id,
            mybooklist: state.myBookList,
            isExist
        }
    },
    function(dispatch){
        return{
            epubFromBookInfo:function(mode, from_mypage){
                dispatch({
                    type:mode,
                    from_mypage
                })
            },
            updateMyBookList: function(mode, value) {
                dispatch({
                    type: mode,
                    my_book_list: value
                })
            }
        }
    }
)(InfoPageLayout);
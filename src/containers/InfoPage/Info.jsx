import { connect } from "react-redux";
import Info from "../../components/InfoPage/Info";

export default connect(
    function(state) {
        var book_id = state.selected_book_id;
        
        var title, image, summary, author, epubURI;
        
        let userid, username;
        let mybooklistLength;

        userid = state.account ? state.account.accountIdentifier : 'visitor';
        username = state.account ? state.account.name : 'visitor';
        mybooklistLength = state.myBookList.length;

        for(let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            if(book.id === book_id) {
                title = book.title;
                image = book.image;
                summary = book.summary;
                author = book.author;
                epubURI = book.epubURI;
                break;
            }
        }
        // console.log(mybooklistLength);
        return{
            id:book_id, title, image, summary, author, epubURI,
            userid, username,
            userbooklistid: state.userBookList.id,
            mybooklist: state.myBookList,
            mybooklistLength
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
)(Info);
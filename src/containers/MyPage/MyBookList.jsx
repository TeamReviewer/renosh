import { connect } from "react-redux";
import MyBookList from "../../components/MyPageContent/MyBookList";

export default connect(
    function(state){
        for (let i = 0; i < state.books.length; i++) {
            let bookid = state.books[i].id;
            while(i < state.myBookIdList.length){
                if(bookid === state.myBookIdList[i])
                    console.log(bookid);
            }
        }
        return{
            books: state.books
        }
    },
    function(dispatch) {
        return{
            changeMyBookList: function(mode, value) {
                dispatch({
                    type: mode,
                    my_book_id: value
                })
            }
        }
    }
)(MyBookList);
import { connect } from "react-redux";
import MyBookList from "../../components/MyPageContent/MyBookList";

export default connect(
    function(state){
        return{
            books: state.books,
            myBookIdList : state.myBookIdList,
            myBookList : state.myBookList
        }
    },
    function(dispatch) {
        return{
            changeMyBookList: function(mode, value) {
                dispatch({
                    type: mode,
                    my_book_id: value
                })
            },
            checkMyBook : function(mode, value) {
                dispatch({
                    type: mode,
                    my_book: value
                })
            }
        }
    }
)(MyBookList);
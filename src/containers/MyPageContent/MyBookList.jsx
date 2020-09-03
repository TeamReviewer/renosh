import { connect } from "react-redux";
import MyBookList from "../../components/MyPageContent/MyBookList";

export default connect(
    function(state){
        let userid;
        userid = state.account ? state.account.accountIdentifier : 'visitor';
        return{
            books: state.books,
            myBookList : state.myBookList,
            myBook : state.myBook,
            userid
        }
    },
    function(dispatch) {
        return{
            checkMyBook : function(mode, value) {
                dispatch({
                    type: mode,
                    my_book: value
                })
            }
        }
    }
)(MyBookList);
import { connect } from "react-redux";
import MyBookList from "../../components/MyPageContent/MyBookList";

export default connect(
    function(state){
        let userid;
        userid = state.account ? state.account.accountIdentifier : 'visitor';
        let tmp = [];
        for(let i = 0; i < state.books.length; i++){
            let bookId = state.books[i].id;
            for(let j = 0; j< state.myBookList.length; j++){
                if(bookId === state.myBookList[j].bookid){
                    tmp.push(state.books[i]);
                }
            }
        }
        return{
            myBook : tmp,
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
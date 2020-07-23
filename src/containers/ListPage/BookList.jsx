import { connect } from "react-redux";
import BookList from "../../components/ListPage/BookList";

export default connect(
    function(state) {
        var books = [...state.books];        
        return {books};
    },
    function(dispatch) {
        return {
            saveBooksToStore: function(mode, books) {
                dispatch({
                    type: mode,
                    books
                })
            }

        }
    }
)(BookList);
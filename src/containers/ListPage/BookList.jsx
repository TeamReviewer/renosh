import { connect } from "react-redux";
import BookList from "../../components/ListPage/BookList";

export default connect(
    null,
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
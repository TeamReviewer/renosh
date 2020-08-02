import { connect } from "react-redux";
import Book from "../../components/ListPage/Book";

export default connect(
    null,
    function(dispatch) {
        return {
            selectBook: function(mode, id, annoList) {
                dispatch({type: mode, id, annoList})
            }
        }
    }
)(Book);
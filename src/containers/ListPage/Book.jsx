import { connect } from "react-redux";
import Book from "../../components/ListPage/Book";
/**
 * 하나의 북이 선택 되었을 경우 지목된 책을 selected_id에 저장하는 문구가 필요하다.
 */
export default connect(
    null,
    function(dispatch) {
        return {
            selectBook: function(mode, id) {
                dispatch({type: mode, id})
            }
        }
    }
)(Book);
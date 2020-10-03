import { connect } from "react-redux";
import BookListContent from "../../components/HomePage/BookListContent";

export default connect(
    function(state) {
        return {
            isState: state.state
        }
    },
    null
)(BookListContent)
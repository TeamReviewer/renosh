import { connect } from "react-redux";
import EmotionTop from "../../components/HomePage/EmotionTop3";

export default connect(
    function(state) {
        return {
            books : state.books
        }
    },
    null
)(EmotionTop);
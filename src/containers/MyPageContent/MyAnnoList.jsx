import { connect } from "react-redux";
import MyAnnoList from "../../components/MyPageContent/MyAnnoList";

export default connect(
    function(state) {
        console.log(state);
        return {
            //id: state.selected_book_id,
            //annoList: state.selected_annoList,
        }
    },
    null
)(MyAnnoList);
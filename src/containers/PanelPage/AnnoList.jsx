import { connect } from "react-redux";
import AnnoList from "../../components/PanelPage/AnnoList";

export default connect(
    function(state) {
        return {
            id: state.selected_book_id,
            annoList: state.selected_annoList,
            likeList:state.likeList
        }
    },
    null
)(AnnoList);
import { connect } from "react-redux";
import AnnoBody from "../../components/PanelPage/AnnoBody";

export default connect(
    function(state) {
        let user_id; 
        if(state.account == null) {
            user_id = null
        } else user_id = state.account.accountIdentifier
        return {
            book_id: state.selected_book_id,
            high_id: state.selected_high_id,
            high_text: state.selected_high_text,
            user_id
        }
    },
    function(dispatch) {
        return {
            changeHighTextToNull : function(mode) {
                dispatch({
                    type: mode
                })
            },
            updateAnnoList: function(mode, annoList){
                dispatch({
                    type: mode, 
                    annoList
                })
            }
        }
    }
)(AnnoBody);
import { connect } from "react-redux";
import AnnoBody from "../../components/PanelPage/AnnoBody";

export default connect(
    function(state) {
        let user_id = state.account ? state.account.accountIdentifier : 'visitor';
        return {
            book_id: state.selected_book_id,
            user_id
        }
    },
    function(dispatch) {
        return {
            updateAnnoList: function(mode, annoList){
                dispatch({
                    type: mode, 
                    annoList
                })
            }
        }
    }
)(AnnoBody);
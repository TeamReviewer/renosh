import { connect } from "react-redux";
import SelectAnnoListArrange from "../../components/PanelPage/SelectAnnoListArrange";

export default connect(
    function(state){
        let user_id; 
        if(state.account == null) {
            user_id = null
        } else user_id = state.account.accountIdentifier
        return{
            id: state.selected_book_id,
            user_id
        }
    },
    function(dispatch) {
        return {
            changeViweMode: function(mode, annoList) {
                dispatch({
                    type: mode,
                    annoList
                })
            }
        }
    }
)(SelectAnnoListArrange);
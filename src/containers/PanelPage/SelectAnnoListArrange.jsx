import { connect } from "react-redux";
import SelectAnnoListArrange from "../../components/PanelPage/SelectAnnoListArrange";

export default connect(
    function(state){
        let user_id = state.account ? state.account.accountIdentifier : 'visitor';
        return{
            id: state.selected_book_id,
            user_id
        }
    },
    function(dispatch) {
        return {
            changeViweMode: function(mode, annoList, view_type) {
                dispatch({
                    type: mode,
                    annoList, 
                    view_type
                })
            }
        }
    }
)(SelectAnnoListArrange);
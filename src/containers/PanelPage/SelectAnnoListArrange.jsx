import { connect } from "react-redux";
import SelectAnnoListArrange from "../../components/PanelPage/SelectAnnoListArrange";

export default connect(
    function(state){
        debugger;
        return{
            id: state.selected_book_id,
            user_id: state.account.accountIdentifier
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
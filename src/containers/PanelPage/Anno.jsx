import { connect } from "react-redux";
import Anno from "../../components/PanelPage/Anno";

export default connect(
    function(state){
        let account_id = state.account ? state.account.accountIdentifier : 'visitor';
        return {
            account_id
        }
    },
    function(dispatch) {
        return {
            moveToAnno: function(mode, cfiRange) {
                dispatch({
                    type: mode, 
                    cfiRange
                })
            },
            deleteAnno: function(mode, anno_id) {
                dispatch({
                    type: mode,
                    anno_id
                })
            }
        }
    }
)(Anno);
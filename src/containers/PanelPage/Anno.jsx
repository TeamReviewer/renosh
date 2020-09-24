import { connect } from "react-redux";
import Anno from "../../components/PanelPage/Anno";

export default connect(
    function(state){
        if(state.account !== undefined){
            return{
                account_id: state.account.accountIdentifier
            }
        }else{
            return {
                account_id : "visitor"
            }
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
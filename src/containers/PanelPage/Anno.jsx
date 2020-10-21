import { connect } from "react-redux";
import Anno from "../../components/PanelPage/Anno";

export default connect(
    function(state){
        let account_id = state.account ? state.account.accountIdentifier : 'visitor';
        let likeList = state.account ? state.likeList : null;
        return {
            account_id,
            likeList
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
            },
            updateLikeList:function(mode, likelist){
                dispatch({
                    type:mode,
                    likelist
                })
            }
        }
    }
)(Anno);
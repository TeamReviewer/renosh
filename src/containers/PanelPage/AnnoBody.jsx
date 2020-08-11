import { connect } from "react-redux";
import AnnoBody from "../../components/PanelPage/AnnoBody";

export default connect(
    function(state) {
        return {
            high_text: state.selected_high_text
        }
    },
    function(dispatch) {
        return {
            changeHighTextToNull : function(mode) {
                dispatch({
                    type: mode
                })
            },
            updateAnnoList: function(mode, annoList, selected_high_id, selected_high_text){
                dispatch({type: mode, annoList, selected_high_id, selected_high_text})
            }
        }
    }
)(AnnoBody);
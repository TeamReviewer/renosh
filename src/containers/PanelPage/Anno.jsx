import { connect } from "react-redux";
import Anno from "../../components/PanelPage/Anno";

export default connect(
    null,
    function(dispatch) {
        return {
            moveToAnno: function(mode, cfiRange) {
                dispatch({
                    type: mode, 
                    cfiRange
                })
            }
        }
    }
)(Anno);
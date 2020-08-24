import {connect} from 'react-redux';
import MyAnno from "../../components/MyPageContent/MyAnno";

export default connect(
    null,
    function(dispatch){
        return{
            selectBook:function(mode, id, annoList){
                dispatch({
                    type:mode, 
                    id,
                    annoList
                })
            }
        }
    }
)(MyAnno);
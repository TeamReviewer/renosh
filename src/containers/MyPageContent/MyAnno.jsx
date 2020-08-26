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
            },
            moveToAnno:function(mode, cfiRange){
                dispatch({
                    type:mode,
                    cfiRange
                })
            },
            epubFromMypage:function(mode, from_mypage){
                dispatch({
                    type:mode,
                    from_mypage
                })
            }
        }
    }
)(MyAnno);
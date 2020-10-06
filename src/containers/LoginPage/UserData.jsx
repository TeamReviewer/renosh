import { connect } from "react-redux";
import Login from "../../components/LoginPage/LoginButton";

export default connect(
    function(state) {
        let userid, username;
        userid = state.account ? state.account.accountIdentifier : 'visitor';
        username = state.account ? state.account.name : 'visitor';

        return{
            userid, username
        }
    },
    function(dispatch){
        return{
            initUserBookList:function(mode, value){
                dispatch({
                    type:mode,
                    user_book_list:value
                })
            },
            initMyBookList:function(mode, value){
                dispatch({
                    type:mode,
                    my_book_list:value
                })
            },
            initLikeList:function(mode,likelist){
                dispatch({
                    type:mode,
                    likelist
                })
            }
        }
    }
)(Login);
import { connect } from "react-redux";
import MyInfoChange from "../../components/MyPageContent/MyInfoChange";


export default connect(
    function(state){
        return{
            displayName: state.account.idToken.name,
            givenName: state.account.idToken.given_name, //이름
            familyName: state.account.idToken.family_name, //성
            email: 'test@mail.com'
        }
    },
    null
)(MyInfoChange);

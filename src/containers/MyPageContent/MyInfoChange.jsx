import { connect } from "react-redux";
import MyInfoChange from "../../components/MyPageContent/MyInfoChange";


export default connect(
    function(state){
        return{
            displayName: state.idToken ? state.account.idToken.name : "visitor",
            givenName: state.idToken ? state.account.idToken.given_name : "visitor",
            familyName: state.idToken ? state.account.idToken.family_name : "visitor",
            email: 'test@mail.com'
        }
    },
    null
)(MyInfoChange);

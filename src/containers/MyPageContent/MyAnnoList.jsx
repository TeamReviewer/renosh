import { connect } from "react-redux";
import MyAnnoList from "../../components/MyPageContent/MyAnnoList";

export default connect(
    function(state) {
        return {
            user_id: state.idToken ? state.account.accountIdentifier : null
        }
    },
    null
)(MyAnnoList);
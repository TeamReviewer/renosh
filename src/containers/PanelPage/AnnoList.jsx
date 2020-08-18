import { connect } from "react-redux";
import AnnoList from "../../components/PanelPage/AnnoList";

export default connect(
    function(state) {
        return {
            id: state.selected_book_id,
            annoList: state.selected_annoList.sort((o1, o2) => o2._ts - o1._ts),// 그런데 이렇게 조회할 때 마다 정렬을 해야할까? 뭔가 굉장히 리소스적으로 안좋은 형태인 것 같다.
        }
    },
    null
)(AnnoList);
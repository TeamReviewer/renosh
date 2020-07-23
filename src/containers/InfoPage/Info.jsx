import { connect } from "react-redux";
import Info2 from "../../components/InfoPage/Info2";

export default connect(
    function(state) {
        var bookList = [];
        console.log("state = ", state.books)
        for(let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            bookList.push(book);
        }
        return{
            bookList
        }
    },
    null
)(Info2);
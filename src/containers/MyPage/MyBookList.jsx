import { connect } from "react-redux";
import MyBookList from "../../components/MyPageContent/MyBookList";

export default connect(
    function(state){
        let fristId = state.books[0].id;
        
        for (let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            // let book_id = book.id
            
        }
        return{
            books: state.books,
            fristId: fristId
        }
    },
    // function(dispatch) {
    //     return{
    //         changeJonghoValue: function(mode, value) {
    //             dispatch({
    //                 type: mode,
    //                 jongho_value: value
    //             })
    //         },
    //         chagneA: function() {

    //         }
    //     }
    // }
)(MyBookList);
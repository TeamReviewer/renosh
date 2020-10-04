import { connect } from "react-redux";
import ReadBookList from "../../components/HomePage/ReadBookList";

export default connect(
    function(state) {
        let tmp = [];
        for(let i = 0; i < state.books.length; i++){
            let bookId = state.books[i].id;
            for(let j = 0; j< state.myBookList.length; j++){
                if(bookId === state.myBookList[j].bookid){
                    tmp.push(state.books[i]);
                }
            }
        }
        let myBook = tmp;
        if(myBook.length > 3){
            myBook = myBook.slice(0, 3)
        }
        return {
            myBook: myBook
        }
    }
)(ReadBookList)
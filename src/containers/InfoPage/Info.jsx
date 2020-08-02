import { connect } from "react-redux";
import Info from "../../components/InfoPage/Info";

export default connect(
    function(state) {
        var book_id = state.selected_book_id;
        
        var title, image, summary, author, epubURI;

        for(let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            if(book.id === book_id) {
                title = book.title;
                image = book.image;
                summary = book.summary;
                author = book.author;
                epubURI = book.epubURI;
                break;
            }
        }
        return{
            id:book_id, title, image, summary, author, epubURI
        }
    },
    null
)(Info);
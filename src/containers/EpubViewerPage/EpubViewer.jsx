import { connect } from "react-redux";
import EpubViewer from "../../components/EpubViewerPage/EpubViewer";

export default connect(
    function(state) {
        let book_id = state.selected_book_id;
        let title, image, summary, author, epubURL;
        for (let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            if(book.id === book_id) {
                title = book.title;
                image = book.image;
                summary = book.summary;
                author = book.author;
                epubURL = book.epubURL;
                break;
            }
        }
        return {
            id:book_id, title, image, summary, author, epubURL
        }
    },
    function(dispatch) {
        return {

        }
    }
)(EpubViewer);
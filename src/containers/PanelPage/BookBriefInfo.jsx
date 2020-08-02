import { connect } from "react-redux";
import BookBriefInfo from "../../components/PanelPage/BookBriefInfo";

export default connect(
    function(state) {
        var book_id = state.selected_book_id;
        var title, image, summary, author, _ts, PublicationDate, date, Title;
        for(let i = 0; i < state.books.length; i++) {
            let book = state.books[i];
            if(book.id === book_id) {
                title = book.title;
                Title = book.Title
                image = book.image;
                summary = book.summary;
                author = book.author;
                PublicationDate = book.PublicationDate;
                _ts = book._ts;
                if(_ts) {
                    var newdate = new Date(_ts * 1000).toString();                    
                }
                date = PublicationDate ? PublicationDate :newdate;
                break;
            }
        }
        return{
            id:book_id, title,Title,  image, summary, author, alt: title, date
        }
    },
    null
)(BookBriefInfo);
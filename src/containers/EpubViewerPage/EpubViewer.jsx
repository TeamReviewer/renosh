import { connect } from "react-redux";
import EpubViewer from "../../components/EpubViewerPage/EpubViewer";

export default connect(
    function(state) {
        let book_id = state.selected_book_id, selected_cfiRange, from_mypage;
        let title, image, summary, author, epubURL;
        let userid, username;
        let annoList = state.selected_annoList
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
        selected_cfiRange = state.from_mypage ? state.selected_cfiRange : "2";
        userid = state.account ? state.account.accountIdentifier : 'visitor';
        username = state.account ? state.account.name : 'visitor';
        from_mypage = state.from_mypage;
        
        return {
            id:book_id, 
            title, 
            image, 
            summary, 
            author, 
            epubURL,selected_cfiRange,
            annoList,
            userid,
            username,
            from_mypage,
            view_type: state.annoList_view_type
        }
    },
    function(dispatch) {
        return {
            updateAnnoList: function(mode, selected_high_id, selected_high_text){
                dispatch({type: mode, selected_high_id, selected_high_text})
            }
        }
    }
)(EpubViewer);
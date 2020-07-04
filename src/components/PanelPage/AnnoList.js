import React, {Component} from 'react';
import axios from 'axios'
import Anno from './Anno'

class AnnoList extends Component {
    state = {
        annos: [],
        isLoading: true,
    }

    getAnnoData = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({
            annos: movies,
            isLoading:false,
        })
    }
    componentDidMount() {
        this.getAnnoData();
    }

    render() {
        let list;
        if(!this.state.isLoading) {
            list = this.state.annos.map(
                anno => (<Anno author={anno.title} date={anno.date_upload} content={anno.title_long} key={anno.id} />)
            )
        }
        return (
            <div>
               {
                   this.state.isLoading ? "isLoading .." : list
               }
            </div>
        )
    }
}


export default AnnoList;
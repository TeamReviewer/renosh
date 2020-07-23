import React, {Component} from 'react';
import axios from 'axios'
import Anno from './Anno'

class AnnoList extends Component {
    state = {
        annos: [],
        isLoading: true,
    }

    getAnnoData = async () => {
        const annos = await axios.get("http://renosh.koreacentral.cloudapp.azure.com:5000/api/highlights/book/1");
        console.log("annos: ", annos.data);
        this.setState({
            annos: annos.data,
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
                anno => (<Anno  author={anno.user_id}  content={anno.text} key={anno.id} />)
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
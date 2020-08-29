import React, {Component} from 'react';
import { Layout } from 'antd';
import DashBoard from './DashBoard'
import ListForm from './ListForm'
import BookListContainer from '../../containers/ListPage/BookList';
import Header from './Header';
import Content from './Content';

const { Footer, Sider } = Layout;

class ListLayout extends Component {    
    render() {
        return (
            // <div className="listLayout">
            //     <DashBoard />
            //     <ListForm />
            //     <BookListContainer />
            // </div>  
            <div className="site-container">
                <Layout>
                    <Header/>
                    <Content/>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default ListLayout;
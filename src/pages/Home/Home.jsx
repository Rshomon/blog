import React from "react"
import { Layout } from 'antd';
import Headers from "../../components/Headers/Headers"
import Contents from "../../components/Content/Content"
import Footers from "../../components/Footer/Footer"
import "./Home.css"
const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Headers current="1"></Headers>
                </Header>
                <Content className="site-layout content" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Contents>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                        <p>nihao </p>
                    </Contents>
                </Content>
                <Footer style={{ textAlign: 'center' }}><Footers></Footers></Footer>
            </Layout>
        )
    }
}
export default Home
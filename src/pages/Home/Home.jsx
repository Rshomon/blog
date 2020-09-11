import React from "react"
import { Layout, Row, Col } from 'antd';
import Headers from "../../components/Headers/Headers"
import Contents from "../../components/Content/Content"
import Footers from "../../components/Footer/Footer"
import "./Home.css"
import HeaderList from "../../components/HeaderList/Listdata"
import Slideshow from "../../components/Slideshow/Slideshow"
import ListData from "../../components/ListData/ListData"

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:"white" }}>
                    <Headers current="1"></Headers>
                </Header>
                <Content className="site-layout content" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Contents>
                        {/* 头部显示 */}
                        <Row className="">
                            <Col span={10}><Slideshow></Slideshow></Col>
                            <Col span={14}><HeaderList /></Col>
                        </Row>
                        <ListData></ListData>
                    </Contents>
                </Content>
                <Footer style={{ textAlign: 'center' }}><Footers></Footers></Footer>
            </Layout >
        )
    }
}
export default Home
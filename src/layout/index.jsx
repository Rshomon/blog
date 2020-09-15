import React from "react"
import { Layout, Row, Col } from 'antd';
import Headers from "../components/Headers/Headers"
import Footers from "../components/Footer/Footer"
const { Header, Content, Footer } = Layout;


export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white" }}>
                    <Row>
                        <Col span={16} offset={4}>
                            <Headers current="1"></Headers></Col>
                    </Row>
                </Header>
                <Content className="site-layout content" style={{ padding: '0 50px', marginTop: 64 ,paddingTop:'10px'}}>
                    <Row>
                        <Col span={16} offset={4}>
                        <div className="site-layout-background w" style={{ padding: 24, minHeight: 380 }}>
                            {this.props.children}
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}><Footers></Footers></Footer>
            </Layout >
        )
    }
}
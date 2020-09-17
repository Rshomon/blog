import React from "react"
import { Layout, Row, Col } from 'antd';
import Headers from "../components/Headers/Headers"
import Footers from "../components/Footer/Footer"
import "./index.less"
const { Header, Content, Footer } = Layout;


export default class Index extends React.Component {
    render() {
        console.log(this.state)
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white", padding: '0' }}>
                    <Row>
                        <Col span={1} style={{ backgroundColor: "red" }}></Col>
                        <Col span={22} style={{ backgroundColor: "black" }}>
                            <Headers current="1"></Headers></Col>
                        <Col span={1} style={{ backgroundColor: "red" }}></Col>
                    </Row>
                </Header>
                <Content className="site-layout content" style={{ marginTop: 64, paddingTop: '10px' }}>
                    {/* <Row> */}
                    {/* <Col span={22} offset={1}> */}
                    <div className="site-layout-background w" style={{ minHeight: 380, width: 1000 }}>
                        {this.props.children}
                    </div>
                    {/* </Col> */}
                    {/* </Row> */}
                </Content>
                <Footer style={{ textAlign: 'center' }}><Footers></Footers></Footer>
            </Layout >
        )
    }
}
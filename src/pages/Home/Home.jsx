import React from "react"
import { Row, Col } from 'antd';
import Contents from "../../components/Content/Content"
import HeaderList from "../../components/HeaderList/Listdata"
import Slideshow from "../../components/Slideshow/Slideshow"
import ListData from "../../components/ListData/ListData"
import Layout from "../../layout"
import BackTop from "../../components/BackTop/BackTop"
import "./Home.css"

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Contents>
                    {/* 头部显示 */}
                    <Row>
                        <Col span={16}>
                            {/* <Row>
                                <Col span={10}><Slideshow></Slideshow></Col>
                                <Col span={14}><HeaderList /></Col>
                            </Row> */}
                            <ListData></ListData>
                        </Col>
                        <Col span={8}>
                            <div className="wrapper-right">
                                <Slideshow></Slideshow>
                                <HeaderList />
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col span={16}>
                            <ListData></ListData>
                        </Col>
                        <Col span={8}></Col>
                    </Row> */}
                </Contents>
                <BackTop />
            </Layout >
        )
    }
}
export default Home
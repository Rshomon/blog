import React from "react";
import "./Home.less";
import { Row, Col } from "antd";
import Head from "../../components/Head/Head"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            span: 6,
            status: true,
            arrow: "null"
        }
    }
    // 切换布局大小
    SwitchBtn = () => {
        this.setState({
            span: this.state.status ? 1 : 6,
            status: !this.state.status,
            arrow: this.state.status ? "rotate(180deg)" : null,
        })
    }
    render() {
        const style = {
            transition: "all 1s",
        }
        const arrowstyle = {
            transform: this.state.arrow,
            transition: "all 1s ",
            color: "black"
        }
        return (
            <div>
                <Row >
                    <Col style={style} span={this.state.span} className="sidebar">
                        <a><i style={arrowstyle} onClick={this.SwitchBtn} className="iconfont">&#xe62c;</i></a>
                    </Col>
                    <Col style={style} span={24 - this.state.span} className="mainbar">
                        {/* <Row className="headbar">
                            <Col className="head" span="16" ofset="4">
                                <Head home_active={true}/>
                            </Col>
                        </Row> */}
                        <Row className="main">
                            <Col span="4">
                            </Col>
                            <Col className="outer11" span="16">
                                <div className="inter11">
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                    <div>我是内容</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
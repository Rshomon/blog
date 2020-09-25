import React from "react"
import { Row, Col } from "antd"
import style from "./ComponentTest.module.css"

class ComponentTest extends React.Component {
    render() {
        return (
            <Row className={style.row}>
                <Col className={style.a} xs={0} md={0} xl={1}>
                    <button onClick={()=>{console.log("aaaa")}}>按钮</button>
                </Col>
                <Col className={style.b} xs={0} md={4} xl={4}></Col>
                <Col className={style.c} xs={24} md={16} xl={15}></Col>
                <Col className={style.d} xs={0} md={4} xl={4}></Col>
            </Row>
        )
    }
}

export default ComponentTest
import { BackTop } from 'antd';
import React from "react"
import "./BackTop.less"
export default class Index extends React.Component {
    render() {
        return (
            <>
                <BackTop className="a">
                    <div className="hvr-sweep-to-top BactTopStyle">
                        UP
                </div>
            </BackTop>
            </>
        )
    }
}
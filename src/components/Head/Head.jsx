import React from "react"
import "./Head.less"
export default class Head extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="left-head"><h3><a href="/">Blog</a></h3></div>
                <div className="right-head">
                    <ul className="right-list">
                        <li ><a href="/">主页</a></li>
                        <li className="active"><a href="/home">博客</a></li>
                        <li><a href="#">关于</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
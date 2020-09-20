import React from "react"
import "./Head.less"
export default class Head extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="left-head"><h3><a href="/">Blog</a></h3></div>
                <div className="right-head">
                    <ul className="right-list">
                        {/* 父传子判断选中状态 */}
                        {/* span为下划线 */}
                        <li className={this.props.index_active ? "active" : false} > <span></span><a href="/">主页</a></li>
                        <li className={this.props.home_active ? "active" : false}><a href="/home">博客</a><span></span></li>
                        <li><a href="#">关于</a><span></span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
import React from "react"
import "./Content.css"

// 内容组件
export default class Content extends React.Component {
    render() {
        return (
            <div className="site-layout-background w" style={{ padding: 24, minHeight: 380 }}>
                {this.props.children}
            </div>
        )
    }
}
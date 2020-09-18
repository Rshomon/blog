import React from "react"
import "./Index.less"

class Index extends React.Component {
    render() {
        return (
            <div className="root" style={{ fontSize: '16px', fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
                <div className="head">
                    <div className="left-head"><h3>Cover</h3></div>
                    <div className="right-head">
                        <ul className="right-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">我是内容</div>
                <div className="footer">我是底部</div>
            </div>
        )
    }
}

export default Index
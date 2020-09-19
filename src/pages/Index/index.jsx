import React from "react"
import "./Index.less"

class Index extends React.Component {
    render() {
        return (
            <div className="root" style={{ fontSize: '16px', fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
                <div className="head">
                    <div className="left-head"><h3><a href="#">Blog</a></h3></div>
                    <div className="right-head">
                        <ul className="right-list">
                            <li><a href="#">主页</a></li>
                            <li><a href="#">博客</a></li>
                            <li><a href="#">关于</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="content-head"><h1 className="at-item">Rm的个人博客</h1></div>
                    <div className="content-main">不爱摄影的程序员不会是好厨子</div>
                    <div className="content-footer">
                        <a href="/home" type="button">进入</a>
                    </div>
                </div>
                <div className="footer">Cover template for <a href='#'>Bootstrap</a>, by <a href='#'>@Rm</a>.</div>
            </div>

        )
    }
}

export default Index
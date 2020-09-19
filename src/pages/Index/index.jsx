import React from "react"
import Head from "../../components/Head/Head"
import "./Index.less"

class Index extends React.Component {
    render() {
        return (
            <div className="root" style={{ fontSize: '16px', fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
                <div className="wrapper-img">
                    <div id="head">
                        <Head />
                        <div className="content">
                            <div className="content-head"><h1 className="at-item">Rm的个人博客</h1></div>
                            <div className="content-main">不爱摄影的程序员不会是好厨子</div>
                            <div className="content-footer">
                                <a href="/home" type="button">进入</a>
                            </div>
                        </div>
                        <div className="footer">Cover template for <a href='#'>Bootstrap</a>, by <a href='#'>@Rm</a>.</div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Index
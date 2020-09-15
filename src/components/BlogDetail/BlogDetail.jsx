import { Anchor } from 'antd';
import React from "react"
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import "./BlogDetail.less"
class BlogDetail extends React.Component {
    render() {
        return (
            // 外层添加一个容器，以达到消除滚动条扔可以下滑
            <div className="outer">
                <Anchor className="AnchorPosition">
                    <MarkNav
                        className="article-menu"
                        source={this.props.articleDetail}
                        headingTopOffset={80}
                    />
                </Anchor>
            </div>
        )
    }
}
export default BlogDetail
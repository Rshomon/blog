import React from "react"
import { Button } from "antd"
import axios from "axios"
import "./Test.less"

export default class Test extends React.Component {

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
    //     window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    // }

    // componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    //     window.removeEventListener('scroll', this.handleScroll.bind(this))
    //     window.removeEventListener('resize', this.handleResize.bind(this))
    // }

    // handleScroll = e => {
    //     console.log(
    //         '浏览器滚动事件',
    //         e.srcElement.scrollingElement.scrollTop,
    //         e.srcElement.scrollingElement.scrollHeight
    //     )
    //     //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
    //     // e.srcElement.scrollingElement.scrollHeight为整个文档高度
    // }

    // handleResize = e => {
    //     console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    // }
    render() {
        return (
            <div className="wrapper">
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
                <div className="btnstyle">
                    你好
                </div>
            </div>
        )
    }
}
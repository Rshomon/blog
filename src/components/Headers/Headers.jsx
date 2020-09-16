import React from "react"
import { Menu } from 'antd';
import "./Headers.css"
import { NavLink } from "react-router-dom"
const jinrishici = require('jinrishici')
class Headers extends React.Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
    }
    componentDidMount() {
        // 使用今日诗词API获取
        jinrishici.load(result => {
            console.log(result)
            this.setState({
                content: result.data.content
            })
        })
    }

    render() {
        return (
            <div className="header w">
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={this.props.current}>
                    <NavLink className="Navtitle" to='/'>
                        <div class='at-container'>
                        <span class='at-item'>Blog
                        </span>
                    </div>
                    </NavLink>
                    <NavLink className="Navtitle" to='/'>
                        <div class='at-container'>
                        <span class='at-item'>Blog
                        </span>
                    </div>
                    </NavLink>

                    {/* <span>{this.state.content}</span> */}
                    {/* 抖动！！！！！！ */}
                    {/* <div className="shake-slow ">🙈🙉🙊🐵</div> */}
                    {/* <span onClick={()=>{alert("点我干嘛？")}} className="shake-slow shake-constant btn"><a>🙈</a></span> */}
                </Menu>

            </div>
        )
    }
}

export default Headers
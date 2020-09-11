import React from "react"
import { Menu } from 'antd';
import "./Headers.css"
import { NavLink } from "react-router-dom"
class Headers extends React.Component {
    render() {
        return (
            <div className="header w">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.props.current}>
                    <Menu.Item key="1"><NavLink activeClassName="selected" to='/home'>首页</NavLink></Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Headers
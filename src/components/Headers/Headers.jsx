import React from "react"
import { Menu } from 'antd';
import "./Headers.css"
import { NavLink } from "react-router-dom"
class Headers extends React.Component {
    render() {
        return (
            <div className="header w">
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={this.props.current}>
                   <NavLink className="Navtitle" to='/home'>Blog</NavLink>
                </Menu>
            </div>
        )
    }
}

export default Headers
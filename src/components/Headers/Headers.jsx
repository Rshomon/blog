import React from "react"
import { Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { routes } from "../../route/router"
import "./Headers.css"
const Header = () => {
    return (
        <div className="header w">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><NavLink activeClassName="selected" to='/home'>首页</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink activeClassName="selected" to='/about'>关于</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink activeClassName="selected" to='/info'>信息</NavLink></Menu.Item>
            </Menu>
        </div>
    )
}


class Headers extends React.Component {
    render() {
        return (
            <div>

                {/* 注册路由 */}
                <Router>
                    <Header />
                    <Switch>
                        {/* 从路由配置信息里面读取 */}
                        {
                            routes.map((item,index) => {
                                return <Route exact key={index} path={item.path} component={item.component}></Route>
                            })
                        }
                        <Route></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Headers
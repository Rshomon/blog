import React from "react"
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
class Admin extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <div className="logo" />
                    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
                    <div className="site-layout-background" style={{ width: 790, minHeight: 380 }}>
                        {/* Content */}
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>这是底部信息</Footer>
            </Layout>
        )
    }
}
export default Admin
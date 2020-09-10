import React from "react";
// import Admin from "./components/Admin/admin"
import "./App.css";
import "./assets/style/basestyle.css"
import { Layout } from 'antd';
import Headers from "./components/Headers/Headers"

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Headers></Headers>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default App;

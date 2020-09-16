import React from "react";
// import Admin from "./components/Admin/admin"
import "./assets/style/basestyle.css"
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { routes } from "./route/router"


class App extends React.Component {
  render() {
    return (

      <Router>

        <Switch>
          {/* 从路由配置信息里面读取 */}
          {
            routes.map((item, index) => {
              return <Route exact key={index} path={item.path} component={item.component}></Route>
            })
          }
          <Redirect from='/' to="/"></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App;

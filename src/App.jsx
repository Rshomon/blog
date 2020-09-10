import React from "react";
// import Admin from "./components/Admin/admin"
import "./App.css";
import { routes } from "./route/router"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import "./assets/style/basestyle.css"
import Admin from "./components/Admin/admin"

class App extends React.Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     {
      //       routes.map((item) => {
      //         return <Route key={item.path} path={item.path} component={item.component}></Route>
      //       })
      //     }
      //     <Redirect from='/' to='/home' exact></Redirect>
      //     <Redirect to='/404' exact></Redirect>
      //   </Switch>
      // </Router>

      <div>
        <Admin>
          <Router>
            <Switch>
              {
                routes.map((item) => {
                  return <Route key={item.path} path={item.path} component={item.component}></Route>
                })
              }
              {/* <Redirect from='/' to='/home'></Redirect> */}
              你好
            </Switch>
          </Router>

          {/* haahahhahahahah */}
        </Admin>
      </div>
    )
  }
}

export default App;

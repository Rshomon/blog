import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import axios from "axios"
class Demo extends React.Component{
  onclick = () => {
    console.log("aaaaaaaaaaa")
    axios.get("/api/v1")
    .then(resp=>{
      console.log(resp);
    })
    .catch(err=>{
      console.log(err);
    })
    ;
    
    
  };
  render(){
    return(
      <div>
        <button onClick={this.onclick}>按钮</button>
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <Demo/>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react"
import axios from "axios"
import { Button } from "antd"

export default class Test extends React.Component {
    reqdata = () => {
        axios.get("http://127.0.0.1:8000/blog/")
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Button onClick={this.reqdata}>按钮</Button>
            </div>
        )
    }
}



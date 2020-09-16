import React from "react"
import { Button } from "antd"
import axios from "axios"
import "./Test.less"

export default class Test extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="btnstyle">
                    <Button onClick={() => { axios.post("/api/postreq/", { id: "111" }).then(resp => { console.log(resp) }) }}>按钮</Button>
                </div>
            </div>
        )
    }
}
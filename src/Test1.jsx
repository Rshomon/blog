import React from "react"
import { Button } from "antd"
import axios from "axios"

class Test1 extends React.Component {
    onclick = () => {
        axios.get("/api/v1")
            .then((resp) => {
                console.log(resp)
            })
    }
    render() {
        return (
            <div>
                <Button onClick={this.onclick}>请求</Button>
            </div>
        )
    }
}

export default Test1
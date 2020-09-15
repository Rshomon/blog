import React from "react"
import MarkDown from "react-markdown"
import axios from "axios"
import BlogDetail from "../BlogDetail/BlogDetail"
import CodeBlock from "../../utils/CodeBlock"

export default class Detail_page extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        axios.get("/api/detail?id=" + this.props.id)
            .then(resp => {
                console.log(resp.data.data[0].content)
                this.setState({ data: resp.data.data[0].content })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <BlogDetail articleDetail={this.state.data} />
                <MarkDown source={this.state.data}
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock
                    }} />
            </div>
        )
    }
}
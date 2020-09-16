import React from "react"
import Layout from "../../layout"
import MarkDown from "react-markdown"
import axios from "axios"
import BlogDetail from "../../components/BlogDetail/BlogDetail"
import CodeBlock from "../../utils/CodeBlock"
import Spin from "../../components/Spin/Spin"
import "./Detail.less"
import BackTop from "../../components/BackTop/BackTop"
// import Detail_Com from "../../components/Detail/Detail" 

export default class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            status: false,
            data: ""
        }
    }
    componentDidMount() {
        axios.get("/api/detail?id=" + this.props.match.params.id)
            .then(resp => {
                console.log(resp.data.data[0].content)
                this.setState({ data: resp.data.data[0].content, status: true })
                console.log(this.state.status)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {

        return (

            <Layout>
                {this.state.status ?
                    <div>
                        {/* <BlogDetail articleDetail={this.state.data} /> */}
                        <MarkDown source={this.state.data}
                            escapeHtml={false}
                            renderers={{
                                code: CodeBlock
                            }} /></div> : <div className="loading"><Spin /></div>}
                <BackTop />
            </Layout>
        )
    }
}
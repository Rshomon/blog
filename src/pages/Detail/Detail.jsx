

import React from "react"

import Layout from "../../layout"

import MarkDown from "react-markdown"

import axios from "axios"

import BlogDetail from "../../components/BlogDetail/BlogDetail"

import CodeBlock from "../../utils/CodeBlock"

// import Detail_Com from "../../components/Detail/Detail" 



export default class Detail extends React.Component {

    constructor() {

        super()

        this.state = {

            data: ""

        }

    }

    componentDidMount() {

        axios.get("/api/detail?id=" + this.props.match.params.id)

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

            <Layout>

                <BlogDetail articleDetail={this.state.data} />

                <MarkDown source={this.state.data}

                    escapeHtml={false}

                    renderers={{

                        code: CodeBlock

                    }} />

            </Layout>

        )

    }

}
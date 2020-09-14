import React from "react"
import Layout from "../../layout"
import axios from "axios"
import Detail_Com from "../../components/Detail/Detail"

export default class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("/api/test1")
            .then(resp => {
                console.log(resp.data.data)
                // this.setState({ data: resp.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <Layout>
                <Detail_Com data={this.state.data}></Detail_Com>
            </Layout>
        )
    }
}
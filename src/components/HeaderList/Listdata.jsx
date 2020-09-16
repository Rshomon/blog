import { List } from 'antd';
import React from "react"
import axios from "axios"
import Spin from "../Spin/Spin"
import "./Listdata.css"

export default class Listdata extends React.Component {
    constructor() {
        super()
        this.state = {
            status: false,
            data: []
        }
    }
    // 渲染之前调用
    componentDidMount() {
        axios.get("/api/test1?num=5")
            .then(resp => {
                console.log("Listdata", resp.data.data)
                this.setState({
                    data: resp.data.data,
                    status: true,
                })
            })
    }
    render() {
        return (
            <div className="Listdata">
                {/* <Divider orientation="left">Small Size</Divider> */}
                {
                    this.state.status?
                    <List
                    size="small"
                    header={<div className='header'>每日精选</div>}
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => <List.Item><a className="list" href={"/detail/"+item.id}>{item.title}</a></List.Item>}
                />:<Spin/>
                }
            </div>
        )
    }
}
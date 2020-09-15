import { List, Space } from 'antd';
import React from "react"
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import "./ListData.less"
import Spin from "../Spin/Spin"
import axios from "axios"


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default class Listdata extends React.Component {
    constructor() {
        super()
        this.state = {
            status:false,
            listData: []
        }
    }
    componentDidMount() {
        axios.get("/api/test1")
            .then(resp => {
                this.setState({ listData: resp.data.data,status:true })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.status?
                    <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                }}
                dataSource={this.state.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text={item.click_nums} key="list-vertical-star-o" />,
                            // <IconText icon={LikeOutlined} text={item.collect} key="list-vertical-like-o" />,
                            // <IconText icon={MessageOutlined} text={item.com} key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                className="img"
                                width={272}
                                height={150}
                                alt="logo"
                                src={"http://localhost:8000/uploads/"+item.img}
                            />
                        }
                    >
                        <List.Item.Meta

                            // title={<a href={"/detail/:"+item.id}>{item.title}</a>}
                            // 使用params传参的方式，因为需要添加锚点，导致url改变，所以需要固定参数在地址中
                    title={<Link to={{pathname:'/detail/'+item.id}}>{item.title}</Link> }
                            description={item.abstract}
                        />
                        {/* {item.content} */}
                    </List.Item>
                )}
            />:<Spin/>
                }
            </div>
        )
    }
}
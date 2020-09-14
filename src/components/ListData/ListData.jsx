import { List, Space } from 'antd';
import React from "react"
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./ListData.less"
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
            listData: []
        }
    }
    componentDidMount() {
        axios.get("/api/test1")
            .then(resp => {
                this.setState({ listData: resp.data.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
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
                                src="http://www.rashomon.top/img/img.jpg"
                            />
                        }
                    >
                        <List.Item.Meta

                            title={<a href={item.href}>{item.title}</a>}
                            description={item.abstract}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }
}
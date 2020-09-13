import { List } from 'antd';
import React from "react"
import "./Listdata.css"
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Man charged over missing wedding girl.',
];

export default class Listdata extends React.Component {
    render() {
        return (
            <div className="Listdata">
                {/* <Divider orientation="left">Small Size</Divider> */}
                <List
                    size="small"
                    header={<div>Header</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}
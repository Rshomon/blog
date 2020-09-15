import { Spin, Space } from 'antd';
import React from 'react';
import "./Spin.less"

class Spin1 extends React.Component {
    render() {
        return (
            <Space size="middle" className='spin_location'>
                <Spin size="large" />
            </Space>
        )
    }
}

export default Spin1

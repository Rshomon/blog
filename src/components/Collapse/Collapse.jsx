import React from "react"
import { Collapse } from 'antd';
import styles from "./Collapse.module.css"

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

class CollapseCom extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <Collapse defaultActiveKey={['0']} ghost onChange={callback}>
                {
                    this.props.data_list.map((str, index) => {
                        return <Panel header={str.title} key={index} className={styles.col_wrapper}>
                            {
                                str.data.map((str, key) => {
                                    console.log(str)
                                    return <div className={styles.col_list}>
                                        <span class="iconfont">&#xe609;</span>
                                        <a href={str.url}>{str.content}</a>
                                    </div>
                                })
                            }
                        </Panel>
                    })
                }
            </Collapse>
        )
    }
}
export default CollapseCom;
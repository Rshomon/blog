import { Carousel, Image } from 'antd';
import "./Slideshow.less"
import React from "react"
import Item from 'antd/lib/list/Item';
import axios from "axios"
import Spin from "../Spin/Spin"

const CarouselStyle = {
    height: '100%'
}
export default class Slideshow extends React.Component {
    constructor() {
        super()
        this.state = {
            status: false,
            data: [
                // { id: 1, name: '小明', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3543144268,4107014676&fm=26&gp=0.jpg" },
                // { id: 2, name: '小红', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1190745369,970019865&fm=26&gp=0.jpg" },
                // { id: 3, name: '小绿', url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600174100767&di=aa1dfe60812aaa144083e93a45451022&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-78db0ec69e622f235c5cc47cb97a0338_1200x500.jpg" },
                // { id: 4, name: '小蓝', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=672062805,2597808591&fm=26&gp=0.jpg" },
            ]
        }
    }
    componentDidMount() {
        axios.get("/api/head_img")
            .then(resp => {
                console.log(resp.data.data)
                this.setState({
                    data: resp.data.data, status: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="parent_wrapper">
                <Carousel autoplay style={CarouselStyle}>
                    {/* <div className="wrapper">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3543144268,4107014676&fm=26&gp=0.jpg" alt="logo" />
                </div> */}
                    {
                        this.state.status ? this.state.data.map(item => {
                            return <div className="wrapper" key={item.id}>
                                <Image height={232} src={"http://127.0.0.1:8000/uploads/" + item.img} alt={item.title} />
                            </div>

                        }) : <Spin />
                    }
                </Carousel>

            </div>
        )
    }
}